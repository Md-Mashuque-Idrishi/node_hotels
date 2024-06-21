const express = require('express');
const app = express();
const db = require('./db'); // Ensure this path is correct based on your project structure

const bodyParser = require('body-parser'); 
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Welcome to the server response');
});

// import the personRoutes file.
const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

// import the MenuItemRoutes file.
const MenuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menu',MenuItemRoutes);

// Listen port no:- 3000
app.listen(3000, () => {
    console.log('Listening on port 3000');
});

