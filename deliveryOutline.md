# Delivery Script Outline
### Delivery Method: DNS Spoofing
### Specifically- MITM
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
