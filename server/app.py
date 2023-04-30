import sqlite3
import hashlib

def hash_password(password):
    """Returns a salted and hashed password using SHA-256."""
    salt = b'salt_value' # Replace with a unique salt value for your application
    password = password.encode('utf-8')
    hashed_password = hashlib.sha256(salt + password).hexdigest()
    return hashed_password

conn = sqlite3.connect(rw_database.db)
cursor = conn.cursor()

cursor.execute('''CREATE TABLE customer
                (id INTEGER PRIMARY KEY , phonenumber INTEGER,
                 businessname TEXT, Address TEXT, contactname TEXT)''')


cursor.execute('''CREATE TABLE orders
(id INTEGER PRIMARY KEY , order INTEGER, FOREIGN KEY (customer_id) REFERENCES customer(id), 
businessname TEXT, name TEXT,FOREIGN KEY (flowertype) REFERENCES flowers(type),flowercolor TEXT,
 flower_amount TEXT, description TEXT, deliverydate TEXT,  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)'''

)


cursor.execute(''' CREATE TABLE (flowers (type TEXT PRIMARY KEY )''')

cursor.execute (''' CREATE TABLE user_login (username TEXT, password_hash TEXT )



# Insert data into the users table with a hashed password
password = 'my_password'
hashed_password = hash_password(password)
cursor.execute("INSERT INTO users (username, password_hash) VALUES (?, ?)", ('my_username', hashed_password))