#!/bin/bash

#limpando arquivos concluidos
rm /userdata/system/logs/downloads.json
rm /userdata/system/logs/concluido.json

UM="1";
DOIS="1";
#lista de arquivos para downloads

for arq in /userdata/system/logs/*download.json;
do
   if [ $UM = $DOIS ]; then
       echo "passei 1"
       echo  '[ { "arquivo" : "'$arq'" }' >> /userdata/system/logs/downloads.json;
       
       DOIS="0";
   else
      echo "passei 2"
      echo ', { "arquivo" : "'$arq'" }' >> /userdata/system/logs/downloads.json
   fi
    
done

echo " ]" >> /userdata/system/logs/downloads.json

#lista de arquivos para downloads Conpletos
UM="1";
DOIS="1";

for arq in /userdata/system/logs/*concluido.json;
do
   if [ $UM = $DOIS ]; then
       echo "passei 3"
       echo  '[ { "arquivo" : "'$arq'" }' >> /userdata/system/logs/concluido.json;
       
       DOIS="0";
   else
      echo "passei 4"
      echo ', { "arquivo" : "'$arq'" }' >> /userdata/system/logs/concluido.json
   fi
    
done

echo " ]" >> /userdata/system/logs/concluido.json

                                         
exit 0    
    