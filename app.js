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
});

// ================================
// ROUTE PARAMETERS
// ===============================

// app.get('/api/course/:id', (req,res)=>{
//   res.send(req.params.id); 
// });

// ===============================
// multiple parameters in the route
// ================================

// app.get('/api/posts/:year/:month', (req,res)=>{
//   res.send(req.params); 
// });

//  in express we could also get query parameters these are parameters that we add in the url after ?- mark example http://localhost:3000/api/posts/2018/1?sortBy=name - this is a query string parameter and we use query string parameter to provide additional data to our backend services, whereas we use route parameter for essential or required values ie query parameters used for anything that is optional.
// app.get('/api/posts/:year/:month', (req,res)=>{
//   res.send(req.query); 
// });

// ====================
// lets implement a endpoint to  get asingle course
// ====================

const courses = [
  {id: 1,
  name: 'maths'
  },
  {id: 2,
  name: 'science'
  },
  {id: 3,
  name: 'history'
  }
];

app.get('api/courses',(req,res)=>{
  res.send(courses);
})
app.get('/api/courses/:id', (req,res)=>{
 const course = courses.find(c => c.id === parseInt(req.params.id));
 if(! course) res.status(404).send('The course with the given ID was not found');
  res.send(course);
});




app.listen(PORT, ()=>{
  console.log(`listening port ${PORT} port`);
})

