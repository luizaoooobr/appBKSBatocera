#!/bin/bash


sed '/controllers.gpio.enabled=1/ s/controllers.gpio.enabled=1/controllers.gpio.enabled=1/g' /userdata/system/batocera.conf > /userdata/system/batocera.conf1.cfg
mv /userdata/system/batocera.conf1.cfg /userdata/system/batocera.conf

sed '/controllers.gpio.enabled=0/ s/controllers.gpio.enabled=0/controllers.gpio.enabled=1/g' /userdata/system/batocera.conf > /userdata/system/batocera.conf2.cfg
mv /userdata/system/batocera.conf2.cfg /userdata/system/batocera.conf


exit 0
