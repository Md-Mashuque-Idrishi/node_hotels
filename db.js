
const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotel'; // Replace 'hotel' with your database name 
                                                            //  if different.
// Set up MongoDB connection
mongoose.connect(mongoURL);                  // Mongoose starts the connection process.
                                    
// Get the default connection
const db = mongoose.connection;



// Define event listeners for the database connection
db.on('connected', () => {                           // 1 Define Event Listeners: Connected
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {                             // 2 Define Event Listeners: Error
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {                          // 3 Define Event Listeners: Disconnected
    console.log('MongoDB disconnected');
});


// Export the Database Connection: Finally, you export the db object, which represents the
        // MongoDB connection,  
//so that you can import and use it in other parts of your Node.js application.
module.exports = db;  


