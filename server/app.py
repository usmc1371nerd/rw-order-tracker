import sqlite3

conn = sqlite3.connect(rw_database.db)
cursor = conn.cursor()
cursor.execute('''CREATE TABLE customer
                (id INTEGER PRIMARY KEY , phonenumber INTEGER,
                 businessname TEXT, Address TEXT, contactname TEXT)''')

cursor.execute('''CREATE TABLE orders
(id INTEGER PRIMARY KEY , order INTEGER, FOREIGN KEY (customer_id) REFERENCES customer(id), 
businessname TEXT, name TEXT,FOREIGN KEY (flowertype) REFERENCES flowers(type),flowercolor TEXT, flower_amount TEXT, description TEXT, deliverydate TEXT,  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)'''

)

cursor.execute(''' CREATE TABLE (flowers (type TEXT PRIMARY KEY )''')