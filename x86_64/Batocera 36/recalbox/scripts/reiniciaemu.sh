#!/bin/bash

echo "Reiniciando"     

killall -9 retroarch mupen64plus fba2x scummvm &> /dev/null
sh /etc/init.d/S31emulationstation stop &> /dev/null
sleep 2
sh /etc/init.d/S31emulationstation start &> /dev/null
 
       
exit 0    
    