#!/bin/bash

export cont_ai=`ls -l /userdata/cores/*.so |wc -l`

cd /userdata/cores
mount -o remount,rw / 
chmod 777 *.so
cd /usr/lib/libretro
mount -o remount,rw / 
chmod 777 *.so 

if [ "$cont_ai" = "0" ]
then
	echo "Nao existe Emuladores para Atualizar"
	exit 0
else
        echo "Fazendo BackUP dos Emuladores"
        cd /userdata/cores
        for file in *.so; do 
             echo "$file"; 
             cont_ai2=`ls -l /usr/lib/libretro/$file |wc -l`
             if [ "$cont_ai2" = "0" ]
             then
                 echo "N�o existe o Emulador na /usr/lib/libretro/$file"
                 echo "Gerando Emulador /usr/lib/libretro/$file"  
                 mv /userdata/cores/$file /usr/lib/libretro/$file
             else
                 echo "Atualizando Emulador /usr/lib/libretro/$file"  
                 mv /userdata/cores/$file /usr/lib/libretro/$file 
             fi
        done     
fi

exit 0
