const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

const chefs = require('./public/data.json')


// static files
app.use(express.static('public'));


// handle get requiest to the home route '/'
app.get('/',(req,res)=> {
  res.send(`Server is running on port ${port}`)
});


// handle get requiest for each chef by their unique id
app



// handle get request at chefs route
app.get('/chefs',(req,res)=> {
  res.send(chefs);
});


// handle get request at 
app.get('/chef/:id',(req,res)=> {
const reqId = req.params.id;
  const chef = chefs.find(chef => chef._id === reqId)
res.send(chef);
})








// listen on PORT || 5000
app.listen(port,()=> console.log(`server is running on port ${port}`))
