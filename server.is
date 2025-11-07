const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const adsRoutes = require('./routes/ads');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/ads', adsRoutes);

app.get('/', (req, res) => res.send('Server working'));

app.listen(PORT, () => console.log(Server running on ${PORT}));
