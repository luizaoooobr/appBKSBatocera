#!/bin/bash

echo $1     #sistema
echo $2     #game
echo $3     #tamanho
echo $4     #sismin 

case "$4" in
nes)

    echo "Entrando no diretorio"
    cd /userdata/roms/$4/
    
    echo "Remove o Jogo existente"
    
    #rm /userdata/roms/$5/$3
    
    echo "fazendo Download da rom "
    wget -nc https://archive.org/download/nesbks/$2  
                           
    ;;
n64)

    echo "Entrando no diretorio"
    cd /userdata/roms/$4/
    
    echo "Remove o Jogo existente"
    
    #rm /userdata/roms/$5/$3
    
    echo "fazendo Download da rom "
    wget -nc https://archive.org/download/Nintendo64V2RomCollectionByGhostware/$2    
   
   ;;

psx)

    if [ "$1" == "psxntsc" ]
    then
        echo "Entrando no diretorio"
        cd /userdata/roms/$4/
        
        echo "Remove o Jogo existente"
        
        #rm /userdata/roms/$5/$3
        
        echo "fazendo Download da rom "
        wget -nc https://the-eye.eu/public/rom/Playstation/Games/NTSC/$2
        unzip -o *.zip
        rm *.zip
    fi    

    if [ "$1" == "psxntscj" ]
    then
        echo "Entrando no diretorio"
        cd /userdata/roms/$4/
        
        echo "Remove o Jogo existente"
        
        #rm /userdata/roms/$5/$3
        
        echo "fazendo Download da rom "
        wget -nc https://the-eye.eu/public/rom/Playstation/Games/NTSC-J/$2
        unzip -o *.zip
        unzip -o *.rar
        rm *.zip
    fi    

    if [ "$1" == "psxpalm" ]
    then
        echo "Entrando no diretorio"
        cd /userdata/roms/$4/
        
        echo "Remove o Jogo existente"
        
        #rm /userdata/roms/$5/$3
        
        echo "fazendo Download da rom "
        wget -nc https://the-eye.eu/public/rom/Playstation/Games/PAL/$2
        unzip -o *.zip
        unzip -o *.rar
        
        #rm *.zip
    fi    
   ;;

pcengine)

    echo "Entrando no diretorio"
    cd /userdata/roms/$4/
    
    echo "Remove o Jogo existente"
    
    #rm /userdata/roms/$5/$3
    
    echo "fazendo Download da rom "
    wget -nc https://the-eye.eu/public/rom/NEC%20PC%20Engine%20TurboGrafx%2016/$2
        
   ;;
   
snes)

    echo "Entrando no diretorio"
    cd /userdata/roms/$4/
                                          
    echo "Remove o Jogo existente"
    
    #rm /userdata/roms/$5/$3
    
    echo "fazendo Download da rom"
    wget -nc https://the-eye.eu/public/rom/SNES/$2
        
   ;;   

megadrive)

    echo "Entrando no diretorio"
    cd /userdata/roms/$4/
    
    echo "Remove o Jogo existente"
    
    #rm /userdata/roms/$5/$3

    echo "fazendo Download da rom "
    wget -nc https://the-eye.eu/public/rom/Sega%20Genesis/$2

   ;;
   
megadrive)

    echo "Entrando no diretorio"
    cd /userdata/roms/$4/
    
    echo "Remove o Jogo existente"
    
    #rm /userdata/roms/$5/$3

    echo "fazendo Download da rom "
    wget -nc https://the-eye.eu/public/rom/Sega%20Genesis/$2

   ;;   

mastersystem)

    echo "Entrando no diretorio"
    cd /userdata/roms/$4/
    
    echo "Remove o Jogo existente"
    
    #rm /userdata/roms/$5/$3

    echo "fazendo Download da rom "
    wget -nc https://the-eye.eu/public/rom/Sega%20Master%20System/$2

   ;;
    
gb)

    echo "Entrando no diretorio"
    cd /userdata/roms/$4/
    
    echo "Remove o Jogo existente"
    
    #rm /userdata/roms/$5/$3

    echo "fazendo Download da rom "
    wget -nc https://the-eye.eu/public/rom/Nintendo%20Gameboy/$2

   ;;
   
gba)

    echo "Entrando no diretorio"
    cd /userdata/roms/$4/
    
    echo "Remove o Jogo existente"
    
    #rm /userdata/roms/$5/$3

    echo "fazendo Download da rom "
    wget -nc https://the-eye.eu/public/rom/Nintendo%20Gameboy%20Advance/$2

   ;;   

gbc)

    echo "Entrando no diretorio"
    cd /userdata/roms/$4/
    
    echo "Remove o Jogo existente"
    
    #rm /userdata/roms/$5/$3

    echo "fazendo Download da rom "
    wget -nc https://the-eye.eu/public/rom/Nintendo%20Gameboy%20Color/$2

   ;;
   
neogeo)

    echo "Entrando no diretorio"
    cd /userdata/roms/$4/
    
    echo "Remove o Jogo existente"
    
    #rm /userdata/roms/$5/$3

    echo "fazendo Download da rom "
    wget -nc https://the-eye.eu/public/rom/SNK%20Neo%20Geo/$2

   ;;
   
neogeocd)

    echo "Entrando no diretorio"
    cd /userdata/roms/$4/
    
    echo "Remove o Jogo existente"
    
    #rm /userdata/roms/$5/$3

    echo "fazendo Download da rom "
    wget -nc https://the-eye.eu/public/rom/SNK%20Neo%20Geo%20CD/$2
    
    echo "Extraindo a rom! "
    7zr e -aoa *.7z
    
    echo "Removendo a 7z!"
    rm *.7z

   ;;      
      
*) 
    echo "Sem Parametro!"
    exit 2
esac

#killall -9 retroarch mupen64plus fba2x scummvm &> /dev/null
#sh /etc/init.d/S31emulationstation reload &> /dev/null 
                                         
exit 0    
    