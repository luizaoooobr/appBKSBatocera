#!/bin/bash


sed '/global.netplay.relay=nyc/ s/global.netplay.relay=nyc/global.netplay.relay=/g' /userdata/system/recalbox.conf > /userdata/system/recalbox.conf1.cfg
mv /userdata/system/recalbox.conf1.cfg /userdata/system/recalbox.conf

sed '/global.netplay.relay=madrid/ s/global.netplay.relay=madrid/global.netplay.relay=/g' /userdata/system/recalbox.conf > /userdata/system/recalbox.conf2.cfg
mv /userdata/system/recalbox.conf2.cfg /userdata/system/recalbox.conf

sed '/global.netplay.relay=saopaulo/ s/global.netplay.relay=saopaulo/global.netplay.relay=/g' /userdata/system/recalbox.conf > /userdata/system/recalbox.conf2.cfg
mv /userdata/system/recalbox.conf2.cfg /userdata/system/recalbox.conf

sed '/netplay_use_mitm_server =/ s/true/false/g' /userdata/system/configs/retroarch/retroarchcustom.cfg > /userdata/system/configs/retroarch/retroarchcustom4.cfg 
mv /userdata/system/configs/retroarch/retroarchcustom4.cfg /userdata/system/configs/retroarch/retroarchcustom.cfg

exit 0
