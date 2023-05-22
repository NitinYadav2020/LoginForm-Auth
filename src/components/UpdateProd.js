import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UpdateProduct.css';  

const UpdateProd = () => {
  const [id,setId] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [success, setSuccess] = useState(false);

  const setProduct = () => {
    const url = 'https://fakestoreapi.com/products/7';
    const body = JSON.stringify({title: `${title}`, price: `${price}`, description: `${description}`, image: `${image}`, category: `${category}`});
    console.log(body);
    axios.put(url, body)
        .then((data) => {alert('Update Successfully.')})
        .catch((error) => {alert('error')});
};

useEffect(()=> {
    if(success) {
        window.location.href = '/Home';
    }
}, [success]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setProduct();
    setTitle('');
    setId('');
    setPrice('');
    setDescription('');
    setImage('');
    setCategory('');
  };

  return (
    <form className="add-new-prod-form" onSubmit={handleSubmit}>
      <label className='inputContainer'>
        Id:
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
      </label>
      <label className='inputContainer'>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <br />
      <label className='inputContainer'>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <br />
      <label className='inputContainer'>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </label>
      <br />
      <label className='inputContainer'>
        Image URL:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </label>
      <br />
      <label className='inputContainer'>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select a category</option>
          <option value="Category 1">electronics</option>
          <option value="Category 2">jewelery</option>
          <option value="Category 3">men's clothing</option>
          <option value="Category 3">women's clothing</option>
        </select>

      </label>
      <br />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateProd;