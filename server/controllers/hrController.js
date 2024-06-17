const Hr = require('../models/hrModel');

exports.getHrsByCompanyId = (req, res) => {
  const companyId = req.params.companyId;
  Hr.getAllByCompanyId(companyId, (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json(results);
    }
  });
};

exports.createHr = (req, res) => {
  const newHr = req.body;
  Hr.create(newHr, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ id: result.insertId, ...newHr });
    }
  });
};

exports.updateHr = (req, res) => {
  const hrId = req.params.id;
  const updatedHr = req.body;
  Hr.update(hrId, updatedHr, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'HR updated successfully' });
    }
  });
};

exports.deleteHr = (req, res) => {
  const hrId = req.params.id;
  Hr.delete(hrId, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'HR deleted successfully' });
    }
  });
};
