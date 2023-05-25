#!/bin/bash

echo $1 
echo $2
echo $3


case "$3" in
fbneo.json)
    if [ $2 -eq 1 ] 
    then
      killall -9 retroarch mupen64plus fba2x scummvm &> /dev/null
      sleep 1
      echo "Matou retroarch"
      cp /userdata/roms/fbneo/oficial/$1 /userdata/roms/fbneo/.
      mv /userdata/hacks/$3"_tmp" /userdata/hacks/fbneo.json  
      echo "Moveu fbaneo"
    else
      killall -9 retroarch mupen64plus fba2x scummvm &> /dev/null
      echo "Matou 2"
      cp /userdata/roms/fbneo/hacks/$1 /userdata/roms/fbneo/.
      mv /userdata/hacks/$3"_tmp" /userdata/hacks/fbneo.json
      echo "Moveu o fbaneo 2"         
   fi
                           
    ;;
neogeo.json)
    
    if [ $2 -eq 1 ] 
    then
      killall -9 retroarch mupen64plus fba2x scummvm &> /dev/null
      sleep 1
      echo "Matou o retroarch 4"
      cp /userdata/roms/oficialneo/$1 /userdata/roms/neogeo/.
      mv /userdata/hacks/$3"_tmp" /userdata/hacks/neogeo.json  
      echo "Moveu o NeoGeo"
    else
      killall -9 retroarch mupen64plus fba2x scummvm &> /dev/null
      echo "Matou o retroarch 2"
      cp /userdata/roms/hacksneo/$1 /userdata/roms/neogeo/.
      mv /userdata/hacks/$3"_tmp" /userdata/hacks/neogeo.json
      echo "Moveu o Oficial NeoGeo"         
   fi    ;;

*)
    echo "Sem Parametro!"
    exit 2
    ;;
     
esac
exit 0
