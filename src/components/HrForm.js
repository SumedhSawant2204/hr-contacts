import React, { useState, useEffect } from 'react';
import './HrForm.css';


const HrForm = ({ addHr, updateHr, editHr, setEditHr }) => {
  const [form, setForm] = useState({
    id: null,
    name: '',
    email: '',
    contact: '',
    post: '',
    alternateContact: ''
  });

  useEffect(() => {
    if (editHr) {
      setForm(editHr);
    }
  }, [editHr]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      updateHr(form);
    } else {
      addHr({ ...form, id: Date.now() });
    }
    setForm({
      id: null,
      name: '',
      email: '',
      contact: '',
      post: '',
      alternateContact: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="contact" value={form.contact} onChange={handleChange} placeholder="Contact" required />
      <input type="text" name="post" value={form.post} onChange={handleChange} placeholder="Post" required />
      <input type="text" name="alternateContact" value={form.alternateContact} onChange={handleChange} placeholder="Alternate Contact" />
      <button type="submit">{form.id ? 'Update HR' : 'Add HR'}</button>
      {form.id && <button type="button" onClick={() => setEditHr(null)}>Cancel</button>}
    </form>
  );
};

export default HrForm;
