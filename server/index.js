const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors middleware
const hrRoutes = require('./routes/hrRoutes');
const companyRoutes = require('./routes/companyRoutes');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/hrs', hrRoutes);
app.use('/api/companies', companyRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
