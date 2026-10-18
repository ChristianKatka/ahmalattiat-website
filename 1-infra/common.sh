#!/usr/bin/env bash
set -euo pipefail
AHMA_INFRA_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
AHMA_REGION="eu-north-1"
AHMA_CERT_REGION="us-east-1"
AHMA_BUCKET="ahmalattiat-website"
export AWS_PAGER=""
ahma_check_account() {
  local ahma_account
  ahma_account="$(aws sts get-caller-identity --query Account --output text)"
  if [[ "$ahma_account" != "177244120069" ]]; then
    echo "Refusing deployment: unexpected AWS account $ahma_account" >&2
    exit 1
  fi
}
ahma_stack_output() {
  aws cloudformation describe-stacks --stack-name "$1" --region "$2" \
    --query "Stacks[0].Outputs[?OutputKey=='$3'].OutputValue | [0]" --output text
}
