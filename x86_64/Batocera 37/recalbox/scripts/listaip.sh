#!/bin/bash
netstat -tn | grep '192' | grep "ESTABLISHED"| cut -d":" -f2| sort -n
exit 0
