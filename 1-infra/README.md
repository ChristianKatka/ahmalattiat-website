# Ahmalattiat website infrastructure

Deploy from any directory with `bash /path/to/1-infra/deploy-infrastructure.sh`.
The AWS profile must resolve to the company owner's existing AWS account. Scripts
check the account before mutation and wait for each stack before the next step.

## Stack order and regions

1. `ahmalattiat-website-certificate` in **us-east-1** creates an ACM public certificate
   for `ahmalattiat.fi` and `www.ahmalattiat.fi`. Route 53 DNS validation is automatic.
   It also creates a separate encrypted private log bucket with 30-day retention.
   The log bucket allows CloudFront's standard log-delivery ACL and is not the origin.
2. `ahmalattiat-website-s3-bucket` in **eu-north-1** manages the private, encrypted,
   versioned `ahmalattiat-website` bucket. The initial script imports the bucket that
   was already created; subsequent deployments update it normally. Import runs without Outputs, then an update
   adds the regional exports because CloudFormation prohibits adding Outputs during import.
   It uses the S3 REST
   endpoint, not public S3 website hosting. The bucket is retained on deletion/replacement.
3. Build and upload the website, assets first and `index.html` last, without deleting
   older objects. This seeds the origin before the domain is connected.
4. `ahmalattiat-website-cloudfront` in **eu-north-1** creates CloudFront OAC, a cache
   policy with minimum TTL zero, a bucket policy granting this distribution GetObject
   only, and A/AAAA aliases for both website names in the existing Route 53 zone.
   HTTP redirects to HTTPS. Only GET/HEAD are allowed; security headers and compression
   are enabled. Missing routes use the SPA entry point with zero error-cache TTL.

CloudFront is global. Its CloudFormation stack can be in Stockholm; **the certificate
must be in us-east-1**. The script reads certificate/log outputs in US East and passes
parameters to Stockholm; regional Fn::ImportValue references are used only between
bucket and distribution stacks in Stockholm. No ARN copying is necessary.

## Subsequent website publishing

Run `npm run deploy` in `ahma-site/`. It runs lint/build, uploads files, and invalidates
CloudFront using the distribution ID read from the stack. Hashed assets cache for a
year; the entry point requires revalidation. Public images cache for an hour.
No command recursively deletes bucket contents. Old object versions remain available.

## Boundaries and existing resources

Google Workspace MX, SPF, DKIM, verification, NS and SOA records must not change.
Only certificate validation CNAMEs and website A/AAAA records are managed here.
The old Angular CloudFormation stacks/distribution in Ireland are untouched.
A certificate and OAC created manually during initial preparation are separate from
these new stacks and are not deleted by this deployment.

At preflight no dedicated CloudTrail trail was configured. AWS management event history
provides the standard recent event history; this setup does not provision an additional
long-term account-wide trail. CloudFront access logging is configured separately.

Never delete/recreate the retained production bucket to resolve a naming conflict.
Do not rename exported bucket outputs while the CloudFront stack imports them.

## Deployment validation

Before deployment, all three templates passed AWS ValidateTemplate and their change
sets were inspected before execution. AWS Guard 3.2.1 checks from the AWS rules registry
passed for S3 public-access blocking, encryption and TLS policies, plus CloudFront
logging, custom certificate, default root document, SNI and HTTPS viewer policy.
These are selected infrastructure checks, not a complete compliance audit.
Local cfn-lint could not be installed because files.pythonhosted.org was unreachable;
no successful cfn-lint run is claimed. Shell syntax checks, application lint and the
production build passed. Certificate and bucket management use retained resources.

## Deployed 2026-10-16

- Certificate stack: `ahmalattiat-website-certificate`, us-east-1, CREATE_COMPLETE.
- Bucket stack: `ahmalattiat-website-s3-bucket`, eu-north-1, imported then UPDATE_COMPLETE.
- Distribution stack: `ahmalattiat-website-cloudfront`, eu-north-1, CREATE_COMPLETE.
- Distribution: `E1PO8YRZMRR9FZ`, `d19m28nayxovwr.cloudfront.net`, Deployed.
- Website: https://ahmalattiat.fi and https://www.ahmalattiat.fi.

Verified all 31 published files against their local SHA-256 hashes over HTTPS,
HTTP-to-HTTPS redirect, valid TLS on both website names, executing JavaScript,
hero image loading, mobile menu and Escape handling. S3 denies anonymous access;
its policy is non-public, all public-access blocks are enabled, and the imported
bucket reports IN_SYNC. The five protected MX/TXT/NS/SOA record sets match preflight.
Public DNS resolves the new aliases. The Mac resolver initially cached a missing
apex address, so public-DNS IP overrides were used for the first live checks;
normal local HTTPS to www also succeeded, and a subsequent fresh Chrome check
loaded the apex over HTTPS with status 200 without a DNS override. No system DNS
settings were changed.
