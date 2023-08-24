const express = require("express");
const app = express();
const port = 3000; // You can set your desired port number

// Define a route for '/greeting/:name'
app.get("/greeting/:name", (req, res) => {
  const name = req.params.name;

  // Generate a random greeting message
  const greetings = [
    `Hello, ${name}!`,
    `What's up, ${name}?`,
    `${name}! It's so great to see you!`,
  ];

  // Choose a random greeting message from the array
  const randomGreeting =
    greetings[Math.floor(Math.random() * greetings.length)];

  // Send the greeting as a response
  res.send(`Wow! ${randomGreeting}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
