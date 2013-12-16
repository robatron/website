#! /bin/bash

# Generate and serve Jekyll site from the Cloud9 environment

echo "Starting Jekyll server at https://website-c9-robatron.c9.io..."

jekyll serve  --baseurl ''  --host $IP  --port $PORT
