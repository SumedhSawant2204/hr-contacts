import React from 'react';
import './HrList.css';


const HrList = ({ hrContacts, deleteHr, setEditHr }) => {
  return (
    <div>
      <h2>HR List</h2>
      <ul>
        {hrContacts.map((hr) => (
          <li key={hr.id}>
            <div>
              <strong>Name:</strong> {hr.name}
            </div>
            <div>
              <strong>Email:</strong> {hr.email}
            </div>
            <div>
              <strong>Contact:</strong> {hr.contact}
            </div>
            <div>
              <strong>Post:</strong> {hr.post}
            </div>
            {hr.alternateContact && (
              <div>
                <strong>Alternate Contact:</strong> {hr.alternateContact}
              </div>
            )}
            <button onClick={() => setEditHr(hr)}>Edit</button>
            <button onClick={() => deleteHr(hr.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HrList;
