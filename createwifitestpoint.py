#pip3 install faker scapy
#apt-get install aircrack-ng (skip if using Kali)
#use Linux or VM such as Kali
#doc https://www.thepythoncode.com/article/create-fake-access-points-scapy

#enable monitor mode: kill all processes using airmon-ng check kill
#use iconfig to check active networks and find your WLAN name
#run airmon-ng start (your WLAN name)

from scapy.all import *

# Make variable interface and assign this name of wlan connection name "my-Wlan"
interface = "my_Wlan"

#sender's MAC addres, random MAC address generated
sender = RandMAC()

#assign access point name (name of wifi point)
access_point_name = "Test"

#define 802.11 frame
dot11 = Dot11(type=0, subtype=8,
			addr1="ff:ff:ff:ff:ff:ff",
			addr2=sender, addr3=sender)
beacon = Dot11Beacon()

#assign ssid in frame
e_SSID = Dot11Elt(ID="SSID", info=access_point_name,
				len=len(access_point_name))

# stack all layers and add RadioTap
frame = RadioTap()/dot11/beacon/e_SSID

# send frame in layer 2 every 100 milliseconds using iface interface
sendp(frame, inter=0.1, iface=interface, loop=1)

