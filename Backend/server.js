//this is our backend API

//import and use the express framework
const express = require('express');
const app = express();
//we are importing and using cors so our request doesn't get blocked by policy
const cors = require('cors');
app.use(cors());
//port the server runs on
const port = process.env.PORT || 3000;

//this is the endpoint. the users calls this with the 
//desired method and url, and gets a response.
app.get('/api/getMessage', (req, res) => {
    res.status(200).send("Hello from the backend");
});
app.post('/api/getName/:name', (req, res) => {
    let name = req.params.name;
    console.log(name);
    res.status(200).send("Hello " + name + " from the backend");
});
//This is where we start our server
app.listen(port, () => {
    console.log("listening on port" + port);
});