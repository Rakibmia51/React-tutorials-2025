import React, { useState } from 'react';
import './invoice.css';

function INVOICE() {
  const [customer, setCustomer] = useState({
    name: '',
    address: '',
    phone: '',
    email: ''
  });

  const [items, setItems] = useState([
    { id: 1, description: '', quantity: 1, price: 0 }
  ]);

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleItemChange = (id, field, value) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { id: Date.now(), description: '', quantity: 1, price: 0 }]);
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((total, item) => total + item.quantity * item.price, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div className="entry-form">
      <h2>Invoice Entry</h2>

      <div className="section">
        <h3>Customer Info</h3>
        <input type="text" name="name" placeholder="Customer Name" value={customer.name} onChange={handleCustomerChange} />
        <input type="text" name="address" placeholder="Address" value={customer.address} onChange={handleCustomerChange} />
        <input type="text" name="phone" placeholder="Phone" value={customer.phone} onChange={handleCustomerChange} />
        <input type="email" name="email" placeholder="Email" value={customer.email} onChange={handleCustomerChange} />
      </div>

      <div className="section">
        <h3>Items</h3>
        {items.map(item => (
          <div key={item.id} className="item-row">
            <input
              type="text"
              placeholder="Description"
              value={item.description}
              onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
            />
            <input
              type="number"
              placeholder="Qty"
              value={item.quantity}
              onChange={(e) => handleItemChange(item.id, 'quantity', parseInt(e.target.value))}
            />
            <input
              type="number"
              placeholder="Price"
              value={item.price}
              onChange={(e) => handleItemChange(item.id, 'price', parseFloat(e.target.value))}
            />
            <button onClick={() => removeItem(item.id)}>X</button>
          </div>
        ))}
        <button onClick={addItem}>+ Add Item</button>
      </div>

      <div className="section">
        <h3>Summary</h3>
        <p>Subtotal: ৳ {subtotal.toFixed(2)}</p>
        <p>Tax (10%): ৳ {tax.toFixed(2)}</p>
        <p><strong>Total: ৳ {total.toFixed(2)}</strong></p>
      </div>

      <button className="submit-button">Save Invoice</button>
    </div>
  );
}

export default INVOICE;
