require('dotenv')
  .config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
require('./services/passport');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`I'm connected now!`))
    .catch(e => console.log(e));

mongoose.set('debug', true);

const PORT = process.env.PORT || 3001;

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log('Server started listening on PORT http://localhost:3001');
});