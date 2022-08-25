#!/usr/bin/env bash
set -e 

REGION="eu-west-1"
TEMPLATE_FILE="./cloudfront/ahmalattiat-website-cloudfront-angular.yaml"
STACK_NAME="ahmalattiat-website-cloudfront-angular"

aws cloudformation deploy \
  --stack-name "$STACK_NAME"  \
  --template-file "${TEMPLATE_FILE}" \
  --region "$REGION"
