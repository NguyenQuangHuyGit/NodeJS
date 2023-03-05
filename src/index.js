const express = require('express')
const { engine } = require('express-handlebars')
const morgan = require('morgan')
const path = require('path')
const app = express()
const routes = require('./routes')
const port = 3000

//Static path
app.use(express.static(path.join(__dirname, 'public')))
//Morgan
app.use(morgan('combined'))
//HandleBars
app.engine('hbs', engine({
  extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');

//Render
routes(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})