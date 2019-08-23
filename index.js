const fs = require('fs')
const http = require('http')
const url = require('url')

/*
// Blocking way
const textIn = fs.readFileSync('txt/input.txt', 'utf-8')
console.log(textIn)
const textOut = `This is what we know about the avocado: ${textIn}. \n Created ${Date.now()}`
fs.writeFileSync('txt/output.txt', textOut)
console.log('File successful written')

// non blocking way
fs.readFile('txt/start.txt', 'utf-8', (err, data) => {
  if (err) return console.log('Error 🎇')

  fs.readFile(`txt/${data}`, 'utf-8', (err, data1) => {
    console.log(data1)
    fs.readFile(`txt/append.txt`, 'utf-8', (err, data2) => {
      console.log(data2)
      fs.writeFile('txt.final.txt', `${data1} \n ${data2}`, 'utf-8', err => {
        console.log('Your file have been written 😊')
      })
    })
  })
})
console.log('It will read this')
*/

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data)
const server = http.createServer((req, res) => {
  // console.log(req)
  let pathName = req.url

  if (pathName === '/' || pathName === '/overview') {
    res.end('Hello from the overview')
  } else if (pathName === '/products') {
    res.end('Hello from the products')
  } else if (pathName === '/API') {
    res.writeHead(200, { 'content-type': 'application/json' })
    res.end(data)
  } else {
    res.writeHead(404, {
      'content-type': 'text/html',
      'My-Own-Header': 'Hello World'
    })
    res.end('<h1>That page do not exist </h1>')
  }
})

server.listen(8000, '127.0.0.1', () => {
  console.log('The server is listening')
})
