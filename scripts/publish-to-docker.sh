#!/bin/bash

# NOTE: have to use -e for `echo` when using these colors to interpret the backslash escapes
LIGHT_BLUE='\033[1;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No color

DOCKER_IMAGE_NAME=finos/legend-omnibus
DOCKER_IMAGE_TAG="$1"

# Login to Docker Hub
#
# NOTE: Apparently, we cannot call `docker login ...` from `github-actions` pipeline
# as we will get the error: Cannot perform an interactive login from a non TTY device.
# so we will use `docker/login-action`, if we run this script manually, make sure we
# login beforehand.

# Build Docker image
echo -e "${LIGHT_BLUE}Building image $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG ...${NC}"
sh -x ./build.sh
docker tag legend-omnibus:latest $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG

# Push Docker image
echo -e "${LIGHT_BLUE}Pushing image $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG...${NC}"
docker push --quiet $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG || {
  exit 1
}

echo -e "\n"
echo -e "${GREEN}Successfully published image $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG to Docker Hub! ${NC}"
echo -e "\n"
