#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/common.sh"
ahma_check_account
AHMA_BUCKET_STACK="ahmalattiat-website-s3-bucket"
# The bucket was created before IaC. Import it once instead of recreating it.
if aws cloudformation describe-stacks --stack-name "$AHMA_BUCKET_STACK" --region "$AHMA_REGION" >/dev/null 2>&1; then
  aws cloudformation deploy --stack-name "$AHMA_BUCKET_STACK" \
    --template-file "$AHMA_INFRA_DIR/s3/ahmalattiat-website-s3-bucket.yaml" \
    --region "$AHMA_REGION" --parameter-overrides BucketName="$AHMA_BUCKET" \
    --no-fail-on-empty-changeset
elif aws s3api head-bucket --bucket "$AHMA_BUCKET" --expected-bucket-owner 177244120069 2>/dev/null; then
  AHMA_IMPORT_CHANGE="import-website-bucket-$(date +%s)"
  AHMA_IMPORT_TEMPLATE="$(mktemp)"
  trap 'rm -f "$AHMA_IMPORT_TEMPLATE"' EXIT
  awk '/^Outputs:/ {exit} {print}' "$AHMA_INFRA_DIR/s3/ahmalattiat-website-s3-bucket.yaml" > "$AHMA_IMPORT_TEMPLATE"
  aws cloudformation create-change-set --stack-name "$AHMA_BUCKET_STACK" \
    --change-set-name "$AHMA_IMPORT_CHANGE" --change-set-type IMPORT \
    --template-body "file://$AHMA_IMPORT_TEMPLATE" \
    --resources-to-import "file://$AHMA_INFRA_DIR/s3/import-existing-bucket.json" \
    --parameters ParameterKey=BucketName,ParameterValue="$AHMA_BUCKET" --region "$AHMA_REGION"
  aws cloudformation wait change-set-create-complete --stack-name "$AHMA_BUCKET_STACK" \
    --change-set-name "$AHMA_IMPORT_CHANGE" --region "$AHMA_REGION"
  aws cloudformation execute-change-set --stack-name "$AHMA_BUCKET_STACK" \
    --change-set-name "$AHMA_IMPORT_CHANGE" --region "$AHMA_REGION"
  aws cloudformation wait stack-import-complete --stack-name "$AHMA_BUCKET_STACK" --region "$AHMA_REGION"
  # CloudFormation import forbids adding Outputs; add regional exports afterward.
  aws cloudformation deploy --stack-name "$AHMA_BUCKET_STACK" \
    --template-file "$AHMA_INFRA_DIR/s3/ahmalattiat-website-s3-bucket.yaml" \
    --region "$AHMA_REGION" --parameter-overrides BucketName="$AHMA_BUCKET" \
    --no-fail-on-empty-changeset
else
  aws cloudformation deploy --stack-name "$AHMA_BUCKET_STACK" \
    --template-file "$AHMA_INFRA_DIR/s3/ahmalattiat-website-s3-bucket.yaml" \
    --region "$AHMA_REGION" --parameter-overrides BucketName="$AHMA_BUCKET" \
    --no-fail-on-empty-changeset
fi
