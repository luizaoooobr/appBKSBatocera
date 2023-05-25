#!/bin/bash


sed '/global.netplay.relay=nyc/ s/global.netplay.relay=nyc/global.netplay.relay=/g' /userdata/system/recalbox.conf > /userdata/system/recalbox.conf1.cfg
mv /userdata/system/recalbox.conf1.cfg /userdata/system/recalbox.conf

sed '/global.netplay.relay=madrid/ s/global.netplay.relay=madrid/global.netplay.relay=/g' /userdata/system/recalbox.conf > /userdata/system/recalbox.conf2.cfg
mv /userdata/system/recalbox.conf2.cfg /userdata/system/recalbox.conf

sed '/global.netplay.relay=saopaulo/ s/global.netplay.relay=saopaulo/global.netplay.relay=/g' /userdata/system/recalbox.conf > /userdata/system/recalbox.conf2.cfg
mv /userdata/system/recalbox.conf2.cfg /userdata/system/recalbox.conf


sed '/global.netplay.relay=/ s/global.netplay.relay=/global.netplay.relay=saopaulo/g' /userdata/system/recalbox.conf > /userdata/system/recalbox.conf3.cfg
mv /userdata/system/recalbox.conf3.cfg /userdata/system/recalbox.conf

sed '/netplay_mitm_server =/ s/nyc//g' /userdata/system/configs/retroarch/retroarchcustom.cfg > /userdata/system/configs/retroarch/retroarchcustom1.cfg 
mv /userdata/system/configs/retroarch/retroarchcustom1.cfg /userdata/system/configs/retroarch/retroarchcustom.cfg   

sed '/netplay_mitm_server =/ s/madrid//g' /userdata/system/configs/retroarch/retroarchcustom.cfg > /userdata/system/configs/retroarch/retroarchcustom2.cfg 
mv /userdata/system/configs/retroarch/retroarchcustom2.cfg /userdata/system/configs/retroarch/retroarchcustom.cfg

sed '/netplay_mitm_server =/ s/saopaulo//g' /userdata/system/configs/retroarch/retroarchcustom.cfg > /userdata/system/configs/retroarch/retroarchcustom2.cfg 
mv /userdata/system/configs/retroarch/retroarchcustom2.cfg /userdata/system/configs/retroarch/retroarchcustom.cfg


sed '/netplay_mitm_server =/ s/netplay_mitm_server =/netplay_mitm_server = saopaulo/g' /userdata/system/configs/retroarch/retroarchcustom.cfg > /userdata/system/configs/retroarch/retroarchcustom3.cfg 
mv /userdata/system/configs/retroarch/retroarchcustom3.cfg /userdata/system/configs/retroarch/retroarchcustom.cfg

sed '/netplay_use_mitm_server =/ s/false/true/g' /userdata/system/configs/retroarch/retroarchcustom.cfg > /userdata/system/configs/retroarch/retroarchcustom4.cfg 
mv /userdata/system/configs/retroarch/retroarchcustom4.cfg /userdata/system/configs/retroarch/retroarchcustom.cfg

exit 0
