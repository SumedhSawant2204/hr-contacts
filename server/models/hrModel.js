const db = require('../utils/db');
const { getCompanyIdByName } = require('./companyModel');

const Hr = {
  getAllByCompanyId: (companyId, callback) => {
    const query = 'SELECT * FROM hr WHERE company_id = ?';
    db.query(query, [companyId], callback);
  },
  create: (hr, callback) => {
    getCompanyIdByName(hr.company_id, (err, companyId) => {
      if (err) {
        return callback(err);
      }
      const query =
        'INSERT INTO hr (name, email, contact, post, alternate_contact, company_id) VALUES (?, ?, ?, ?, ?, ?)';
      db.query(
        query,
        [
          hr.name,
          hr.email,
          hr.contact,
          hr.post,
          hr.alternate_contact,
          companyId,
        ],
        callback
      );
    });
  },
  update: (id, hr, callback) => {
    const query =
      'UPDATE hr SET name = ?, email = ?, contact = ?, post = ?, alternate_contact = ? WHERE id = ?';
    db.query(
      query,
      [hr.name, hr.email, hr.contact, hr.post, hr.alternate_contact, id],
      callback
    );
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM hr WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Hr;
