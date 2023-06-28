#!/bin/bash

export cont_ai=`ls -l /recalbox/share/system/.config/retroarch/fbaalpha2012/*.so |wc -l`

cd /recalbox/share/system/.config/retroarch/fbaalpha2012

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
        cd /recalbox/share/system/.config/retroarch/fbaalpha2012
        
        for file in *.so; do 
             echo "$file"; 
             cont_ai2=`ls -l /usr/lib/libretro/$file |wc -l`
             if [ "$cont_ai2" = "0" ]
             then
                 echo "Não existe o Emulador na /usr/lib/libretro/$file"
                 echo "Gerando Emulador /usr/lib/libretro/$file"  
                 cp /recalbox/share/system/.config/retroarch/fbaalpha2012/$file /usr/lib/libretro/$file
             else
                 mv /usr/lib/libretro/$file /recalbox/share/atualizados/$file'_Versao_Anterior'
                 echo "Atualizando Emulador /usr/lib/libretro/$file"  
                 cp /recalbox/share/system/.config/retroarch/fbaalpha2012/$file /usr/lib/libretro/$file 
             fi
        done     
fi

exit 0
