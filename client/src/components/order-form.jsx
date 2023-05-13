import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from "./header"
import "./order-form.css"

const Order = ({ username }) => {
  const history = useNavigate();
  
  const handleLogout = () => {
    history('/');
  }

  const [businessname, setBusinessname] = useState('');
  const [name, setName] = useState('');
  const [orderFields, setOrderFields] = useState([{ flowertype: '', flowercolor: '', flower_amount: '', description: '' }]);
  const [deliverydate, setDeliverydate] = useState('');
  

  const handleOrderFieldClick = () => {
    setOrderFields([...orderFields, { flowertype: '', flowercolor: '', flower_amount: '', description: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/orders', {
      
        businessname,
        name,
        orderFields,
        deliverydate,
      });
      alert('Order created successfully!');
  
      setBusinessname('');
      setName('');
      setOrderFields([{ flowertype: '', flowercolor: '', flower_amount: '', description: '' }]);
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
      <form method="post" action="james.p.dumas@gmail.com"  onSubmit={handleSubmit}>
   
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
       {orderFields.map((field, index) => (
        <div key={index} className='order-field'>
          <label>
            Flower Type:
            <input type="text" value={field.flowertype} onChange={(e) => {
              const newOrderFields = [...orderFields];
              newOrderFields[index].flowertype = e.target.value;
              setOrderFields(newOrderFields);
            }} />
          </label>
          <br />
          <label>
            Flower Color:
            <input type="text" value={field.flowercolor} onChange={(e) => {
              const newOrderFields = [...orderFields];
              newOrderFields[index].flowercolor = e.target.value;
              setOrderFields(newOrderFields);
            }} />
          </label>
          <br />
          <label>
            Flower Amount:
            <input type="number" value={field.flower_amount} onChange={(e) => {
              const newOrderFields = [...orderFields];
              newOrderFields[index].flower_amount = e.target.value;
              setOrderFields(newOrderFields);
            }} />
          </label>
          <br />
          <label>
            Description:
            <input className='description-input' type="text" value={field.description} onChange={(e) => {
              const newOrderFields = [...orderFields];
              newOrderFields[index].description = e.target.value;
              setOrderFields(newOrderFields);
            }} />
          </label>
          <br />
        </div>
      ))}
      <br />
      <div id='orderbtn' onClick={handleOrderFieldClick}>Add line</div>
      <button className='create-order-btn' type="submit">Create Order</button>
    </form>
  

      <button className='logout' onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Order;

// Order for needs to submit the order to 2 different emails
// 1 email is the standing order
// 2 email is the event/wedding orders
// disconnect from the database make it only send through email
// save data base for login data only.