#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/common.sh"
ahma_check_account
AHMA_CERT_ARN="$(ahma_stack_output ahmalattiat-website-certificate "$AHMA_CERT_REGION" CertificateArn)"
AHMA_LOGS_DOMAIN="$(ahma_stack_output ahmalattiat-website-certificate "$AHMA_CERT_REGION" AccessLogsDomainName)"
[[ "$AHMA_CERT_ARN" == arn:aws:acm:us-east-1:*:certificate/* ]]
[[ "$AHMA_LOGS_DOMAIN" == *.s3.amazonaws.com ]]
aws cloudformation deploy --stack-name ahmalattiat-website-cloudfront \
  --template-file "$AHMA_INFRA_DIR/cloudfront/ahmalattiat-website-cloudfront.yaml" \
  --region "$AHMA_REGION" --no-fail-on-empty-changeset \
  --parameter-overrides CertificateArn="$AHMA_CERT_ARN" AccessLogsDomainName="$AHMA_LOGS_DOMAIN"
