#!/bin/bash

echo $1
echo $2

qtde=$(ps -ef | grep retroarch | grep port | grep nick | wc -l)

echo $qtde

if [ "$qtde" = "1" ]
then
   curl -X POST -F 'COMMAND='$1 -F 'IP='$2 http://libpa.site/API/     
else
   echo 'Retroarch nao esta em netplay'	 
fi

exit 0
