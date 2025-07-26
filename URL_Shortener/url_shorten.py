from flask import Flask,request,redirect,jsonify,render_template
import mysql.connector
import hashlib
import base64

app=Flask(__name__)
#database configure
DB_CONFIG = {'host':'localhost',
             'user':'root',
             'password':'Arjunan@root',
             'database':'test'
             }

def get_db_connection():
    return mysql.connector.connect(**DB_CONFIG)

#Genarate Short URL
def generate_short_url(long_url):
    hash_obj= hashlib.sha256(long_url.encode())
    short_path = base64.urlsafe_b64encode(hash_obj.digest())
    return short_path

#Serve the HTML form
@app.route('/')
def home():
    return render_template("/index.html")

#Handle url shortening
@app.route('/shorten', methods=['POST'])
def shorten_url():
    print('1-------------------------------------------------------------------')
    long_url = request.form.get("long_url")
    if not long_url:
        return "INVLID:",400
    
    print('2-------------------------------------------------------------------')

    conn = get_db_connection()       
    print('-------------------------------------------------------------------')

    cursor = conn.curser(dictionary=True)
    print('3-------------------------------------------------------------------')

    #Check if URL exist
    cursor.execute("SELECT short_url FROM url-mapping WHERE long_url=%s",(long_url,))
    existing_entry = cursor.fetchoe()
    print('4-------------------------------------------------------------------')

    if existing_entry:
        return f"Shortedurl:<a href='{request.host_url}{existing_entry['short_url']}'>{request.host_url}{existing_entry['short_url']}</a>"
        #return f"Shortedurl:<a href='{request.host_url}{existing_entry['short_url']}'>https://de/{existing_entry['short_url']}</a>"

    short_url = generate_short_url()
    cursor.execute("INSERT INTO url_maping(long_url,short_url) VALUE (%s,%s)",(long_url,short_url))
    conn.commit()
    conn.close()

    return f"Shorted url: <a href='{request.host_url}{short_url}'>{request.hpst_url}{short_url}</a>"
    print('5-------------------------------------------------------------------')


@app.route('/short_url', methods=['GET'])
def redirect_url(shorturl):
    conn=get_db_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute("SELECT long_url FROM url_mapping WHERE short_url=%s",(short_url,))

    entry = cursor.fetchone()

    if entry:
        cursor.execute("UPDATE url_mapping SET clicks=clicks+1 WHERE short_url=%s",(short_url,))

        conn.commit()
        conn.close()

        return redirect(entry("long_url"))
    conn.close()
    return "Error: URL not fount:404"

#Run the fash application
if __name__ == '__main__':
    app.run(debug=True)
    
