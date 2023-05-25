#!/bin/bash

echo $1     #sistema
echo $2     #game
echo $3     #tamanho
echo $4     #sismin
echo $5     #link
echo $6     #pasta
echo $7     #extrai 


echo "Entrando no diretorio"
cd /userdata/roms/$4/

echo "fazendo Download da rom"

wget -nc $5$6"/"$2

if [ $7 != "n" ] 
then
   echo "extraindo rom!"
   unzip -o *.zip
   rm *.zip 
fi
                                         
exit 0    
    