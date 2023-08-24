const express = require("express"); // Import the 'express' library
const app = express(); // Create a new Express application.
const port = 4000; // The port number where our server will listen for incoming requests.

// todo: greetings name
// Define a route for '/greeting/:name'
app.get("/greeting/:name", (req, res) => {
  const name = req.params.name;
  // 'req' is an object that contains information about a request made to our server.
  // 'params' is a property of 'req' that holds information about parameters in the URL.
  // In this case, we're looking for a parameter named 'name' in the URL.

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

// todo: Tip Total TipPercentage
// Extract the 'total' and 'tipPercentage' parameters from the URL.
app.get("/tip/:total/:tipPercentage", (req, res) => {
  let tip = req.params.total * (req.params.tipPercentage / 100);
  res.send(`Tip Amount: $${tip} for ${req.params.total}`);
});

// todo: Magic 8 Ball
app.get("/magic/:question", (req, res) => {
  const magicRes = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  const magicRandRes = magicRes[Math.floor(Math.random() * magicRes.length)];
  res.send(`
    <h1>${req.params.question}</h1> 
    ${magicRandRes}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
