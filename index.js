const express = require('express')
const app = express ()
const port = 3000

app.get('/tintuc', (req, res) => 
{var a = 1
var b = 2
var c= a+b
res.send('Hello World!111')})

app.listen(port,() => console.log(`Example app listening at http://localhost: ${port}`))
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })