import express from 'express';
const app = express();
const port = 3000;

/**
 * GET    => Get information
 * POST   => Insert information
 * PUT    => Update information
 * DELETE => Delete information
 * PATCH  => Alter information
 */

app.get('/get',(req, res)=>{
  return res.send("Hello from GET");
});

app.post('/post',(req,res)=>{
  return res.send("Hello from POST");
});

app.put('/put', (req, res)=>{
  return res.send("Hello from PUT");
});

app.delete('/delete',(req, res)=>{
  return res.send("Hello from DELETE");
});

app.listen(port,()=>{console.log(`Server is running at http://localhost:${port}`)});