from scapy.all import ARP, Ether, srp

print("Enter targets IP address and port number. ie: 192.168.1.1/24 ")
target = input("Target: ")
arp = ARP(pdst=target)
ether = Ether(dst="ff:ff:ff:ff:ff:ff")
packet = ether/arp

result = srp(packet, timeout=3, verbose=0)[0]
clients = []

for sent, received in result:
    clients.append({'ip': received.psrc, 'mac': received.hwsrc})

print("Available devices in the network:")
print("IP" + " "*18+"MAC")
for client in clients:
    print("{:16}    {}".format(client['ip'], client['mac']))
