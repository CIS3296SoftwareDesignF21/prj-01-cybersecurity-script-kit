import urllib.request
import sys

#requires url as command line arg

#some way to run /Applications/Python 3.7/Install Certificates.command

try:
    response = urllib.request.urlopen(sys.argv[1])
    if response.getcode() == 200:
        print('Authentication required: ', response.getheader('Authentication'))
        print('Info: ', response.info())
    else:
        print("an error occurred")
except urllib.error.HTTPError as e:
    print('''An error occurred: {} The response code was {}'''.format(e, e.getcode()))
