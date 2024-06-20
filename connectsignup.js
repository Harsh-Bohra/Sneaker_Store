const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'sneakers'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// Handle the form submission
const addUser = (name, email, password, callback) => {
  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  connection.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      return;
    }
    console.log('User inserted successfully');
    // Call the callback function to redirect
    callback();
  });
};

// Example usage
const name = 'John Doe';
const email = 'john.doe@example.com';
const password = 'password123';

addUser(name, email, password, () => {
  // Redirect the user to releases.html
  console.log('Redirecting to releases.html');
});

// Close the connection
connection.end();
