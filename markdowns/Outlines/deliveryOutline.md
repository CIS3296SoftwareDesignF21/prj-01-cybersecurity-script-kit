# Delivery Script Outline
### Delivery Method 1: DNS Spoofing
### Specifically- MITM
-for LINUX
- Using Scapy in Python (install first, manipulates packets: forge, decode, etc.)
- Utilize NetfilterQueue library (give access to packets matched by Linux iptables rule)
1. Command line: enter iptables rule: when packet is forwarded, redirect to netfilter queue no. 0: reditect all forwarded packets to Py
2. Import modules
3. Define DNS dictionary (pick/assign where to redirect to)
4. Make callback to invoke when packet is forwarded 
  - convert NFQ packet to Scapy packet using get_payload()
  - check if packet has DNS layer present using haslayer() if statement
  - modify data in DNS layer (if present), use modify_packet(packet) func and summary() for scapy packets
  - set back to NFQ Packet
  - accept() packet
  5. Define modify_packet(packey) func
  -modify DNS packet to map globally defined dictionary, so function will replace real IP with spoofed version
  7. get DNS queury 
  8. Check if website is in record, if not then do not modify
  9. create new answer (spoof), override original, set rda to redirect to IP of choice 
  10. return modified packet
- Python Doc Page: https://www.thepythoncode.com/code/make-dns-spoof-python

#### Delivery Method 2: Fake wifi access point
#### MITM
-For LINUX
1. Create fake wifi access point
2. Set up fake captive portal, i.e. wifi login page
3. Wait for victim to connect to wifi
4. Steal data
- MIMT: anyone who logs in connects via attacker
##### Use scapy
- sniff to find valid mac adress, and also if includes AP mac addy: if so it will save info to global list 
- create 2 packets, one fake pkt will send from device to AP & request to disconnect from AP; other pkt will send from AP to device 
- each pkt is deauthentication packet 
- return the access point data from the ap_list by giving index
##### Class to excecute attack
-  prepare the environment: stop all the running network processes
- Function for searching for networks that we can attack & request from the user to chose the network we want to attack
-  Function for searching for clients in a specific access point that we can attack and request from the user to chose the client we want to perform attack on.
- Function to perform deauthentication attack by given a client mac adress and access point mac address.
- Func to create similar access point to the access point we want to perform attack on
-  Prepare the environment setup for creating the fake access point
-  Display the duplicates access point , and execute the defence on the Network
- Python Doc Page: https://www.thepythoncode.com/article/create-fake-access-points-scapy
- Github Doc: https://github.com/s0lst1c3/evil_twin/blob/master/utils.py

Doc: https://www.kaspersky.com/resource-center/definitions/drive-by-download

#### Delivery Method 3: ARP Spoof
-For LINUX
-pip install scapy
-Get the IP address that we want to spoof
-Get the MAC address of the IP that we want to spoof
-Then create a spoofing packet using the ARP() function to set the target IP, Spoof IP and it’s MAC address that we found above.
-Start the spoofing
-Display the information of the numbers of packets sent
-Finally, re-set the ARP tables of the spoofed address to defaults after spoofing
 - Doc:https://www.geeksforgeeks.org/python-how-to-create-an-arp-spoofer-using-scapy/
 
 #### Delivery Method 4: HID Spoofing
 ##### USB 
 - Configure your payload
    - use python config script
    - manually config
 - compile & upload payload to removable media
 - configure server
 - control a reverse shell
 - Doc: https://github.com/ebursztein/malusb
 