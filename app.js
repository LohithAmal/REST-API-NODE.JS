const express = require('express');

const app = express();

// =========================
// port environment variable
// ========================
const PORT =  process.env.PORT || 3000;


app.get ('/', (req,res)=>{

res.send('HELLO WORLD');
});

app.get('/api/course', (req,res)=>{

  res.send([1,2,3]);

})

app.listen(PORT, ()=>{
  console.log(`listening port ${PORT} port`);
})

