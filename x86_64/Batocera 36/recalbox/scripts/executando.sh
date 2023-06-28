#!/bin/bash

echo $1

cd /userdata/system/.config/retroarch/playarch/
mount -o remount,rw /
chmod 777 *

cd /userdata/system/.config/retroarch/oficial/
mount -o remount,rw /
chmod 777 *

if [ $1 -eq 1 ] 
   then
      killall -9 retroarch mupen64plus fba2x scummvm &> /dev/null
      sleep 1
      echo "Matou o retroarch 1"
      cd /usr/bin/
      mount -o remount,rw / 
      chmod 777 retroarch
      cd /userdata/system/.config/retroarch/playarch/
      cp retroarch /usr/bin/.
      echo "Moveu o Playarch"
else
      killall -9 retroarch mupen64plus fba2x scummvm &> /dev/null
      echo "Matou o retroarch 2"
      sleep 1
      cd /usr/bin/
      mount -o remount,rw / 
      chmod 777 retroarch
      cd /userdata/system/.config/retroarch/oficial/
      cp retroarch /usr/bin/.
      echo "Moveu o Oficial"         
fi
exit 0
