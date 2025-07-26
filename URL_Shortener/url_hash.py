'''import hashlib
import base64

def generate_short_url(long_url):
    hash_obj = hashlib.sha256(long_url.encode())
    short_path = base64.urlsafe_b64encode(hash_obj.digest())[:6].decode()

   # print(hash_obj.digest())
    print("http://github.com/"+short_path)

generate_short_url("https://github.cpm/CodeWithArjunan/PY_Project")
'''

import mysql.connector
print('ggg')
try:
    print('fff')
    conn=mysql.connector.connect(
        host='localhost',
        user='root',
        password='Arjunan@root',
        database='test')
    print("complete")

except Exception as e:
    print('not')

print('ggg')