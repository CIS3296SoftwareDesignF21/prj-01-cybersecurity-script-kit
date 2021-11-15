#Display Hostname and IP address https://www.geeksforgeeks.org/display-hostname-ip-address-python/

import socket
 
# Function to display hostname and
# IP address
def get_Host_name_IP():
    try:
        host_name = socket.gethostname()
        host_ip = socket.gethostbyname(host_name)
        print("Hostname :  ",host_name)
        print("IP : ",host_ip)
    except:
        print("Unable to get Hostname and IP")
 
# Driver code
get_Host_name_IP() #Function call
 
#This code is contributed by "Sharad_Bhardwaj".