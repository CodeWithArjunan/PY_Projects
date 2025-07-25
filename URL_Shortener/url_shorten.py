from flash import Flash,request,redirect,jsonify,render_template
import mysql.Connector
import hashlib
import base64

app=Flash(__name__)

DB_CONFIG = {'host':'localhost',
             'user':'root',
             'password':'root',
             'database':'test'
             }

def db_connection():
    return mysql.connector.connect(**DB_CONFIG)


def generate_short_url(long_url):
    hash_obj= hashlib.sha256(long_url.encode())
    short_path = base64.urlsafe_b64encode(hash_obj.digest())
    return short_path


@app.route('/')
def home():
    return render_template("index.html")

@app.route('/shorten',method=['POST'])
def shorten_url():
    long_url = request.form.get("long_url")
    if not long_url:
        return "INVLID",400

    conn = get_db_connector()
    curseor = conn.curser(dictionary=True)

    curser.execute("SELECT short_url FROM url-mapping WHERE long_url=%s",(long_url,))
    existing_entry = cursor.fetchoe()

    if existing_entry:
        return f"Shortedurl:<a href='{request.host_url}{existing_entry['short_url']}'>{request.host_url}{existing_entry['short_url']}</a>"
        #return f"Shortedurl:<a href='{request.host_url}{existing_entry['short_url']}'>https://de/{existing_entry['short_url']}</a>"

    
