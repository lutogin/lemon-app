#!/bin/bash

set -e

host="api-manager"
port="3001"
cmd="$@"

>&2 echo "!!!!!!!! Check api-manager for available !!!!!!!!"

until curl http://"$host":"$port"; do
  >&2 echo "api-manager is unavailable - sleeping"
  sleep 1
done

>&2 echo "api-manager is up - executing command"

exec $cmd
