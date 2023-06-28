#!/bin/bash

echo $1

cd /usr/lib/libretro/
mount -o remount,rw / 
chmod 777 *.* 

cd /userdata/system/.config/cores/
chmod 777 *.* 

cd /userdata/download/
mount -o remount,rw / 
chmod 777 *.*

if [ $1 -eq 1  ] 
   then
   cd  /usr/lib/libretro/ 
   rm fbneo_libretro.*
   cd /userdata/download/
   rm fbneo_libretro.*
   wget https://buildbot.libretro.com/nightly/linux/armhf/latest/fbneo_libretro.so.zip 
   unzip fbneo_libretro.so.zip
   chmod 777 *.so
   rm fbneo_libretro.so.zip
   mv /userdata/system/.config/cores/fbneo_libretro.so /userdata/atualizados/fbneo_libretro.so'_UltimaVersao'
   cp /userdata/download/fbneo_libretro.so /userdata/system/.config/cores/fbneo_libretro.so
   cd /usr/lib/libretro/
   ln -s /userdata/system/.config/cores/fbneo_libretro.so /usr/lib/libretro/. &> /dev/null 
   
fi

if [ $1 -eq 2 ] 
   then
   cd /userdata/system/.config/cores/
   rm fbneo_libretro.so
   cd  /usr/lib/libretro/
   rm snes9x_libretro.so
   cd /userdata/download/
   rm snes9x_libretro.so
   wget https://archive.org/download/fbneo_libretro/snes9x_libretro.so.zip
   unzip snes9x_libretro.so.zip
   chmod 777 *.so
   rm snes9x_libretro.so.zip 
   #mv /userdata/system/.config/cores/snes9x_libretro.so /userdata/atualizados/snes9x_libretro.so'_UltimaVersao'
   cp /userdata/download/snes9x_libretro.so /userdata/system/.config/cores/snes9x_libretro.so
   cd /usr/lib/libretro/
   ln -s /userdata/system/.config/cores/snes9x_libretro.so /usr/lib/libretro/. &> /dev/null
fi

if [ $1 -eq 3 ] 
   then
   cd  /usr/lib/libretro/
   rm fbalpha2012_libretro.*
   cd /userdata/download/
   rm fbalpha2012_libretro.*
      
   wget https://buildbot.libretro.com/nightly/linux/armhf/latest/fbalpha2012_libretro.so.zip
   unzip fbalpha2012_libretro.so.zip
   chmod 777 *.so
   rm fbalpha2012_libretro.so.zip 
   #mv /userdata/system/.config/cores/fbalpha2012_libretro.so /userdata/atualizados/fbalpha2012_libretro.so'_UltimaVersao'
   cp /userdata/download/fbalpha2012_libretro.so /userdata/system/.config/cores/fbalpha2012_libretro.so
   cd /usr/lib/libretro/
   ln -s /userdata/system/.config/cores/fbalpha2012_libretro.so /usr/lib/libretro/. &> /dev/null
fi

if [ $1 -eq 4 ] 
   then

   cd /userdata/system/.config/cores/
   rm fbneo_libretro.so
   cd  /usr/lib/libretro/
   rm fbneo_libretro.so
   cd /userdata/download/
   rm fbneo_libretro.so
  
      
   wget https://archive.org/download/fbneo_libretro/fbneo_libretro.so.zip
   unzip fbneo_libretro.so.zip 
   chmod 777 *.so
   rm fbneo_libretro.so.zip 
   mv /userdata/system/.config/cores/fbneo_libretro.so /userdata/atualizados/fbneo_libretro.so'_UltimaVersao'
   cp /userdata/download/fbneo_libretro.so /userdata/system/.config/cores/fbneo_libretro.so
   cd /usr/lib/libretro/
   ln -s /userdata/system/.config/cores/fbneo_libretro.so /usr/lib/libretro/. &> /dev/null
fi

echo 'Fim'
 
batocera-save-overlay 

exit 0
