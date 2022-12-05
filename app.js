const express = require('express');
const { argv } = require('optimist');
const app = express();
const PORT = 3000;
const currentTime = () => new Date().toUTCString();
const interval = argv.i;
const timerOut = argv.t;

app.get('/', (req, res) => {
  const timer = setInterval(() => console.log(currentTime()), interval);
  setTimeout(() => clearInterval(timer), timerOut);
  setTimeout(() => res.send(currentTime()), timerOut);
});
app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
