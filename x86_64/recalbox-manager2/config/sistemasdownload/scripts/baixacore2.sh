#!/bin/bash

echo $1     #core
echo $2     #base
echo $3     #dir
echo $4     #pasta
echo $5     #atualiza
echo $6     #link

#Gerando o link do core na pasta original
cd /usr/lib/libretro/
mount -o remount,rw / 
chmod 777 $1
rm $1
cd $3$4
ln -s $3$4"/"$1 /usr/lib/libretro/. &> /dev/null  

batocera-save-overlay     
                                         
exit 0    
    