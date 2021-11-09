# Reconnaisance Scripts Outline

- Get Header Information
    - Input: URL as command line argument
    - Use urllib.request python library to get header information
    - Get the following information (can add on)
        - Authentication required to access
        - Date
        - Expiration
        - Cache control
        - Content type
        - P3P
        - Server
        - X-XSS Protection
        - Set cookies
        - Alt svc
        - Accept Ranges
        - Connection
        - Transfer encoding
    - Python doc page: https://docs.python.org/3/howto/urllib2.html

- Network Scanning
    - Locate the open ports available on a particular host
    - Get the following information
        - Info about open ports
        - Info about the services running on each port
        - Info about OS and MAC address of the target host
    - Use sockets
    - helpful website: https://www.tutorialspoint.com/python_penetration_testing/python_penetration_testing_network_scanner.htm

- Get host information
    - Find the hostname and IP information of a maching
    - Use sockets
    - Helpful website: https://www.geeksforgeeks.org/display-hostname-ip-address-python/

- Port Scanning
    - Scan ports for both web applications and remote hosts
    - Use sockets
    - Will scan thousands of ports
    - Output: List of open ports
    - Helpful website: https://www.geeksforgeeks.org/port-scanner-using-python/?ref=lbp

- Phishing
    - Send phishing emails using python script
    - Use python email library
    - *more research needed*
    - Helpful website: https://github.com/averagesecurityguy/scripts/blob/master/phishing/send_email.py



