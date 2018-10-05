#!/bin/bash -eu

cd dist
name=tweetdeck
target=$(ls tweetdeck*tar.gz | sed -re 's/.tar.gz//')
tar xf $target.tar.gz
rm -fr $target.tar.gz
find $target -type d -exec chmod 775 {} +
find $target -type f -exec chmod 664 {} +
chmod +x $target/$name
tar cJf $target.tar.xf $target
cd -
