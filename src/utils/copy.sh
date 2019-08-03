#! /bin/sh
cd /Users/james/James\'sRepositories/Node-SimpleBlogServer/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log