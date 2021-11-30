#main code to execute script
from sniffing import sniffing
import k9
 
try:
    k9.sniffing('en0')
 
except KeyboardInterrupt:
    print('Exit...')
