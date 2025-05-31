const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const cors = require('cors');
const app = express();

const aiRoutes = require('./routes/aiRoute');

app.use(cors());  
app.use(express.json());


app.use('/api/v1/ai', aiRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));





app.get('/', (req, res) => {
    res.send('Backend is running Smoothly...');
})




module.exports = app;