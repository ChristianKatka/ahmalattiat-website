#!/usr/bin/env bash
set -e 

REGION="eu-west-1"
TEMPLATE_FILE="./s3/ahmalattiat-website-s3-bucket-angular.yaml"
STACK_NAME="ahmalattiat-website-s3-bucket-angular"
BUCKET_NAME="ahmalattiat-website-angular"

aws cloudformation deploy \
  --stack-name "$STACK_NAME"  \
  --template-file "${TEMPLATE_FILE}" \
  --region "$REGION" \
  --parameter-overrides BucketName="$BUCKET_NAME"

