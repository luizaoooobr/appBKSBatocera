#!/bin/bash

echo $1

cd /userdata/playarch/
mount -o remount,rw /
chmod 777 *

cd /userdata/oficial/
mount -o remount,rw /
chmod 777 *

if [ $1 -eq 1 ] 
   then
      sed '/netplay_nickname/ s/_PA//g' /userdata/system/configs/retroarch/retroarchcustom.cfg > /userdata/system/configs/retroarch/retroarchcustom2.cfg 
      mv /userdata/system/configs/retroarch/retroarchcustom2.cfg /userdata/system/configs/retroarch/retroarchcustom.cfg;
      sleep 0.5
      
      killall -9 retroarch mupen64plus fba2x scummvm &> /dev/null
      sleep 1
      echo "Matou o retroarch 1"
      cd /usr/bin/
      mount -o remount,rw / 
      chmod 777 retroarch
      cd /userdata/playarch/
      cp retroarch /usr/bin/.
      echo "Moveu o Playarch"
else
      echo "Volta o que estava antes"
      sed '/netplay_nickname/ s/_PA//g' /userdata/system/configs/retroarch/retroarchcustom.cfg > /userdata/system/configs/retroarch/retroarchcustom2.cfg
      mv /userdata/system/configs/retroarch/retroarchcustom2.cfg /userdata/system/configs/retroarch/retroarchcustom.cfg
      sleep 0.5
      sed '/netplay_nickname = "/ s/"/_PA"/g' /userdata/system/configs/retroarch/retroarchcustom.cfg > /userdata/system/configs/retroarch/retroarchcustom2.cfg
      sleep 0.5
      sed '/netplay_nickname/ s/= _PA/= /g' /userdata/system/configs/retroarch/retroarchcustom2.cfg > /userdata/system/configs/retroarch/retroarchcustom3.cfg
      mv /userdata/system/configs/retroarch/retroarchcustom3.cfg /userdata/system/configs/retroarch/retroarchcustom.cfg      
      sleep 0.5
      rm /userdata/system/configs/retroarch/retroarchcustom2.cfg
      
      killall -9 retroarch mupen64plus fba2x scummvm &> /dev/null
      echo "Matou o retroarch 2"
      sleep 1
      cd /usr/bin/
      mount -o remount,rw / 
      chmod 777 retroarch
      cd /userdata/oficial/
      cp retroarch /usr/bin/.
      echo "Moveu o Oficial"         
fi
exit 0
