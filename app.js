const express = require('express')
const exphbs = require('express-handlebars')
const generateTrashTalk = require('./models/generate_trashtalk')
const app = express()
const port = 4000

// setting body-parser
app.use(express.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const trashTalk = generateTrashTalk(options)
  res.render('index', { trashTalk: trashTalk, options: options })
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.listen(port, () => {
  console.log(`The Express server is running on http://localhost${port}`)
})
