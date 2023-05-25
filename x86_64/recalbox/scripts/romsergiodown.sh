#!/bin/bash

echo $1     #sistema
echo $2     #roms
echo $3     #url
echo $4     #caminho 

if [ $1 == "segacd" ]
then
    echo "segacd"
    cd $4
    
    wget -nc $3
    unzip *.zip
    
else
    
    if [ $1 == "pcenginecd" ]
    then
        echo "pcenginecd"
        cd $4
        wget -nc $3
    
        unzip *.zip
    
        rm *.zip
    else    
       
        if [ $1 == "megafbneo" ]  
        then
          
            echo "megafbneo"
            cd $4
    
            wget -nc $3$2
            rm $2 
            mv megadrive%2F$2 $2
            
        else
            
            echo "outros"   
            cd $4
            wget -nc $3/$2
        
       fi       
   fi
          
fi
  
#killall -9 retroarch mupen64plus fba2x scummvm &> /dev/null
#sh /etc/init.d/S31emulationstation reload &> /dev/null 
       
exit 0    
    