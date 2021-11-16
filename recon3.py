#Display local machine Hostname https://www.geeksforgeeks.org/display-hostname-ip-address-python/
#Code changed: original doesn't work on Mac Sierra and newer unless host database is changed

import socket
import sys

def __init__():
    pass
 
# Function to display hostname
def run() -> None:
    try:
        host_name = socket.gethostname()
        print("Hostname :  ",host_name)
    except:
        print("Unable to get Hostname")
 
if __name__ == "__main__":
    run(sys.argv[1])