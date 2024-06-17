const Company = require('../models/companyModel');

exports.getAllCompanies = (req, res) => {
    Company.getAll((err, results) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json(results);
        }
    });
};

exports.createCompany = (req, res) => {
    const newCompany = req.body;
    console.log(ne)
    Company.create(newCompany, (err, result) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json({ id: result.insertId, ...newCompany });
        }
    });
};
