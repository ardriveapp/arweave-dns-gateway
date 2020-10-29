#!/bin/sh
rsync -r -v -z -e ssh --exclude .git --exclude node_modules --exclude greenlock.d ./ vilenarios@ardrive-dns:~/arweave-dns-gateway
