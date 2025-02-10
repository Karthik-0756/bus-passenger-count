const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bus_passenger_count')
  .then(() => console.log('Connected!'));