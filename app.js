const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.render('index')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.listen(port, () => {
  console.log(`The Express server is running on http://localhost${port}`)
})
