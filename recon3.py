#Display Hostname https://www.geeksforgeeks.org/display-hostname-ip-address-python/
#Code changed: original doesn't work on Mac unless host database is changed

import socket
 
# Function to display hostname
def get_Host_name_IP():
    try:
        host_name = socket.gethostname()
        print("Hostname :  ",host_name)
    except:
        print("Unable to get Hostname")
 
# Driver code
get_Host_name_IP() #Function call
 
#This code is contributed by "Sharad_Bhardwaj".