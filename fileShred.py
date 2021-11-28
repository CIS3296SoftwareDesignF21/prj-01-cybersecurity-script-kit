import os
file_name = (input("Enter path for file for shred"))
f = open(file_name,'w')
f.write("00110111110001010100010001001")
f.close()
os.rename(file_name,'abf09i')
os.unlink('abf09i')
print(file_name + " shredded successfully")
