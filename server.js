const express = require('express')
const connectDB = require('./config/db')
const path = require('path')

const app = express();
const http = require("http");
const server = http.createServer(app);
// Connect Databese
connectDB();

//Init Middleware
app.use(express.json({ extended: false }))

const PORT = process.env.PORT || 5500;

//app.get('/', (req, res) => res.send('API Running'))

//Define Routes
app.use('/api/category', require('./routes/api/category'));
app.use('/api/item', require('./routes/api/item'));

//Serve static assets in production
//Set static folder
app.use(express.static('client/src'));

app.get('*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'client', 'src', 'index.html'));
})

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});