import React, { useState } from 'react';
import HrForm from './HrForm';
import HrList from './HrList';
import './HrContacts.css';


const HrContacts = () => {
  const [hrContacts, setHrContacts] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [editHr, setEditHr] = useState(null);

  const addHr = (hr) => {
    setHrContacts([...hrContacts, hr]);
  };

  const updateHr = (updatedHr) => {
    setHrContacts(hrContacts.map(hr => (hr.id === updatedHr.id ? updatedHr : hr)));
    setEditHr(null);
  };

  const deleteHr = (id) => {
    setHrContacts(hrContacts.filter(hr => hr.id !== id));
  };

  const companies = ['Company A', 'Company B', 'Company C']; // Mock data for companies

  return (
    <div>
      <h1>HR Contacts</h1>
      <select onChange={(e) => setSelectedCompany(e.target.value)} value={selectedCompany}>
        <option value="">Select a company</option>
        {companies.map((company, index) => (
          <option key={index} value={company}>{company}</option>
        ))}
      </select>
      {selectedCompany && (
        <>
          <HrForm addHr={addHr} updateHr={updateHr} editHr={editHr} setEditHr={setEditHr} />
          <HrList hrContacts={hrContacts} deleteHr={deleteHr} setEditHr={setEditHr} />
        </>
      )}
    </div>
  );
};

export default HrContacts;
