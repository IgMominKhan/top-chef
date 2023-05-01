const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

// handle get requiest to the home route '/'
app.get('/',(req,res)=> {
  res.send(`Server is running on port ${port}`)
});

// listen on PORT || 5000
app.listen(port,()=> console.log(`server is running on port ${port}`))
