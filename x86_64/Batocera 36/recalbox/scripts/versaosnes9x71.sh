#!/bin/bash

export cont_ai=`ls -l /userdata/system/.config/retroarch/snes9x71/*.so |wc -l`

cd /userdata/system/.config/retroarch/snes9x71

mount -o remount,rw / 

chmod 777 snes9x_libretro.so

cd /usr/lib/libretro

mount -o remount,rw / 

chmod 777 snes9x_libretro.so 

if [ "$cont_ai" = "0" ]
then
	echo "Nao existe Emuladores para Atualizar"
	exit 0
else
        echo "Fazendo BackUP dos Emuladores"
        cd /userdata/system/.config/retroarch/snes9x71
        
        for file in *.so; do 
             echo "$file"; 
             cont_ai2=`ls -l /usr/lib/libretro/$file |wc -l`
             if [ "$cont_ai2" = "0" ]
             then
                 echo "Não existe o Emulador na /usr/lib/libretro/$file"
                 echo "Gerando Emulador /usr/lib/libretro/$file"  
                 cp /userdata/system/.config/retroarch/snes9x71/$file /userdata/system/.config/cores/$file
                 cd /usr/lib/libretro/
                 rm snes9x_libretro.so
                 ln -s /userdata/system/.config/cores/fbneo_libretro.so /usr/lib/libretro/. &> /dev/null
             else
                 mv /usr/lib/libretro/$file /userdata/atualizados/$file'_Versao_Anterior'
                 echo "Atualizando Emulador /usr/lib/libretro/$file"  
                 cp /userdata/system/.config/retroarch/snes9x71/$file /userdata/system/.config/cores/$file 
                 cd /usr/lib/libretro/
                 rm snes9x_libretro.so
                 ln -s /userdata/system/.config/cores/snes9x_libretro.so /usr/lib/libretro/. &> /dev/null
             fi
        done     
fi

batocera-save-overlay

exit 0
