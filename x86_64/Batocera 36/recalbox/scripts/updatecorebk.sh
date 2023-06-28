#!/bin/bash

echo $1

cd /usr/lib/libretro/
mount -o remount,rw / 
chmod 777 *.* 

cd /userdata/download/
mount -o remount,rw / 
chmod 777 *.*

if [ $1 -eq 1  ] 
   then
   rm fbneo_libretro.*
   wget https://buildbot.libretro.com/nightly/linux/armhf/latest/fbneo_libretro.so.zip 
   unzip fbneo_libretro.so.zip
   chmod 777 *.so
   rm fbneo_libretro.so.zip
   mv /usr/lib/libretro/fbneo_libretro.so /userdata/atualizados/fbneo_libretro.so'_'`date +%d%m%Y-%H%M`
   cp /userdata/download/fbneo_libretro.so /usr/lib/libretro/fbneo_libretro.so
   
fi

if [ $1 -eq 2 ] 
   then
   rm snes9x_libretro.*
   wget https://buildbot.libretro.com/nightly/linux/armhf/latest/snes9x_libretro.so.zip
   unzip snes9x_libretro.so.zip
   chmod 777 *.so
   rm snes9x_libretro.so.zip 
   mv /usr/lib/libretro/snes9x_libretro.so /userdata/atualizados/snes9x_libretro.so'_'`date +%d%m%Y-%H%M`
   cp /userdata/download/snes9x_libretro.so /usr/lib/libretro/snes9x_libretro.so
fi

echo 'Fim'

exit 0
