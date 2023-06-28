#!/bin/bash

echo $1     #sistema
echo $2     #game
echo $3     #tamanho
echo $4     #sismin
echo $5     #link
echo $6     #pasta
echo $7     #extrai
echo $8     #nome 

hoje=$(date +"%d-%m-%y")

#echo "Donwload : "$8 >  /userdata/system/logs/$8.download.1

echo '[{ "game" : "'$8'", "tam" : "'$3'", "data" : "'$hoje'", "pasta" : "/userdata/roms/'$4'/" }]' > /userdata/system/logs/$8"_download."json

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

sleep 1

#Aqui vai excluir os arquivos de download
mv /userdata/system/logs/"$8".download /userdata/system/logs/"$8""_concluido".json
#rm /userdata/system/logs/$8.download
                                         
exit 0    
    