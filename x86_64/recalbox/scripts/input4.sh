#!/bin/bash

sed '/netplay_request_device_p1 =/ s/false/true/g' /userdata/system/configs/retroarch/retroarchcustom.cfg > /userdata/system/configs/retroarch/retroarchcustom2.cfg 
mv /userdata/system/configs/retroarch/retroarchcustom2.cfg /userdata/system/configs/retroarch/retroarchcustom.cfg;

sed '/netplay_request_device_p2 =/ s/false/true/g' /userdata/system/configs/retroarch/retroarchcustom.cfg > /userdata/system/configs/retroarch/retroarchcustom2.cfg 
mv /userdata/system/configs/retroarch/retroarchcustom2.cfg /userdata/system/configs/retroarch/retroarchcustom.cfg;

sed '/netplay_request_device_p3 =/ s/false/true/g' /userdata/system/configs/retroarch/retroarchcustom.cfg > /userdata/system/configs/retroarch/retroarchcustom2.cfg 
mv /userdata/system/configs/retroarch/retroarchcustom2.cfg /userdata/system/configs/retroarch/retroarchcustom.cfg

sed '/netplay_request_device_p4 =/ s/false/true/g' /userdata/system/configs/retroarch/retroarchcustom.cfg > /userdata/system/configs/retroarch/retroarchcustom2.cfg 
mv /userdata/system/configs/retroarch/retroarchcustom2.cfg /userdata/system/configs/retroarch/retroarchcustom.cfg

sed '/netplay_request_device_p1 =/ s/true/false/g' /userdata/system/configs/retroarch/retroarchcustom.cfg > /userdata/system/configs/retroarch/retroarchcustom2.cfg 
mv /userdata/system/configs/retroarch/retroarchcustom2.cfg /userdata/system/configs/retroarch/retroarchcustom.cfg

sed '/netplay_request_device_p2 =/ s/true/false/g' /userdata/system/configs/retroarch/retroarchcustom.cfg > /userdata/system/configs/retroarch/retroarchcustom2.cfg 
mv /userdata/system/configs/retroarch/retroarchcustom2.cfg /userdata/system/configs/retroarch/retroarchcustom.cfg

sed '/netplay_request_device_p3 =/ s/true/false/g' /userdata/system/configs/retroarch/retroarchcustom.cfg > /userdata/system/configs/retroarch/retroarchcustom2.cfg 
mv /userdata/system/configs/retroarch/retroarchcustom2.cfg /userdata/system/configs/retroarch/retroarchcustom.cfg

exit 0
