
#Imports
import random
import string

#charters to use to guess against
passChar = string.printable
CharList = list(passChar)
print(passChar)

#Input to test if code is correct. 
enteredPW = input("Test Password: ")
#PWlength = len(enteredPW)

guess = ""

while(guess != enteredPW):
    guess = random.choices(CharList, k=len(enteredPW))
    print(str(guess))

    if(guess == enteredPW):
        print("Password found: "+ "".join(guess))
        break
    