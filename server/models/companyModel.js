const db = require('../utils/db');

const Company = {
  getAll: (callback) => {
    const query = 'SELECT * FROM companies';
    db.query(query, callback);
  },
  create: (company, callback) => {
    const query = 'INSERT INTO companies (name, academic_year) VALUES (?, ?)';
    db.query(query, [company.name, company.academic_year], callback);
  },
  getCompanyIdByName: (companyName, callback) => {
    const query = 'SELECT id FROM companies WHERE name = ?';
    db.query(query, [companyName], (err, results) => {
      if (err) {
        return callback(err);
      }
      if (results.length === 0) {
        return callback(new Error('Company not found'));
      }
      callback(null, results[0].id);
    });
  }
};

module.exports = Company;