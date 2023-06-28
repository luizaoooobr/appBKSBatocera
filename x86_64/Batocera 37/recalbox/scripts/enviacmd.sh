#!/bin/bash

echo $1


if [ $1 -eq 1 ]; then
   /usr/bin/retroarch --command "NETPLAY_GAME_WATCH";"127.0.0.1";"55355"
fi

if [ $1 -eq 2 ] 
   then
   /usr/bin/retroarch --command "VOLUME_UP" 
fi

if [ $1 -eq 3 ] 
   then
   /usr/bin/retroarch --command "VOLUME_DOWN" 
fi

if [ $1 -eq 4 ] 
   then
   ##/usr/bin/retroarch --command "QUIT"
   /usr/bin/retroarch --command "NETPLAY_HOST_TOGGLE";"127.0.0.1";"55355"     
fi

if [ $1 -eq 5 ] 
   then
   /usr/bin/retroarch --command "LOAD_STATE" 
fi

if [ $1 -eq 6 ] 
   then
   /usr/bin/retroarch --command "SAVE_STATE"
fi

if [ $1 -eq 7 ] 
   then
   /usr/bin/retroarch --command "STATE_SLOT_PLUS"
fi

if [ $1 -eq 8 ] 
   then
   /usr/bin/retroarch --command "STATE_SLOT_MINUS" 
fi

if [ $1 -eq 9 ] 
   then
   /usr/bin/retroarch --command "RESET" 
fi

if [ $1 -eq 10 ] 
   then
   /usr/bin/retroarch --command "SCREENSHOT" 
fi

exit 0
