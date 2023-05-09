import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from "./header"

const Order = ({ username }) => {
  const history = useNavigate();
  
  const handleLogout = () => {
    history('/');
  }

  const [businessname, setBusinessname] = useState('');
  const [name, setName] = useState('');
  const [flowertype, setFlowertype] = useState('');
  const [flowercolor, setFlowercolor] = useState('');
  const [flower_amount, setFlowerAmount] = useState('');
  const [description, setDescription] = useState('');
  const [deliverydate, setDeliverydate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/orders', {
      
        businessname,
        name,
        flowertype,
        flowercolor,
        flower_amount,
        description,
        deliverydate,
      });
      alert('Order created successfully!');
  
      setBusinessname('');
      setName('');
      setFlowertype('');
      setFlowercolor('');
      setFlowerAmount('');
      setDescription('');
      setDeliverydate('');
    } catch (error) {
      alert(error.response.data.error);
    }
    console.log(alert)
  };

  return (
    
    <div>
      <Header/>
      
      <h1>Welcome, {username}!</h1>
      <form onSubmit={handleSubmit}>
   
      <br />
      <label>
        Business Name:
        <input type="text" value={businessname} onChange={(e) => setBusinessname(e.target.value)} />
      </label>
      <br />
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Flower Type:
        <input type="text" value={flowertype} onChange={(e) => setFlowertype(e.target.value)} />
      </label>
      <br />
      <label>
        Flower Color:
        <input type="text" value={flowercolor} onChange={(e) => setFlowercolor(e.target.value)} />
      </label>
      <br />
      <label>
        Flower Amount:
        <input type="number" value={flower_amount} onChange={(e) => setFlowerAmount(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Delivery Date:
        <input type="date" value={deliverydate} onChange={(e) => setDeliverydate(e.target.value)} />
      </label>
      <br />
      <button type="submit">Create Order</button>
    </form>
  

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Order;

// Order for needs to submit the order to 2 different emails
// 1 email is the standing order
// 2 email is the event/wedding orders
// disconnect from the database make it only send through email
// save data base for login data only.