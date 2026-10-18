#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/common.sh"
ahma_check_account
aws cloudformation deploy \
  --stack-name ahmalattiat-website-certificate \
  --template-file "$AHMA_INFRA_DIR/acm/ahmalattiat-website-certificate.yaml" \
  --region "$AHMA_CERT_REGION" --no-fail-on-empty-changeset
