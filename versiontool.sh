#!/bin/bash

# Check or set pan-for-gold Package Versions
# Note: Use x.x.x numeric values in the semver for the packages only

function check_semver() {
    local version
    version="$1"
    if [[ ! ${version} =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
        echo "ERROR:<->Version format is incorrect: '$version'"
        exit 1
    fi
}


case "$1" in
    "version")
    if [[ $# -eq 2 ]] ; then
        check_semver $2
        npm version $2 --git-tag-version=false
        npm version | grep pan-for-gold
    else
        echo "Usage: the second parameter is the new version number in x.x.x format"
    fi
    ;;
    "check")
        npm version | grep pan-for-gold
    ;;
    "help")
        echo "Options:"
        echo "    version  -- Set npm version with semver format"
        echo "    check    -- Check npm version"
    ;;
    *)
    echo "Options:"
    echo "    version  -- Set npm version with semver format"
    echo "    check    -- Check npm version"
    exit 1
    ;;
esac