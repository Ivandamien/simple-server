const http = require('http');
const fs = require('fs');
const url = require('url');

const tempHome = fs.readFileSync(`${__dirname}/templates/home.html`, 'utf-8');
const tempAbout = fs.readFileSync(`${__dirname}/templates/about.html`, 'utf-8');
const tempContact = fs.readFileSync(`${__dirname}/templates/contact.html`, 'utf-8');

const server = http.createServer((req, res) => {
    const pathName = req.url

    if (pathName === '/' || pathName === '/home') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(tempHome)
    } else if (pathName === '/about') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(tempAbout)
    } else if (pathName === '/contacts') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(tempContact)
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html'
        });
        res.end('<h1>PAGE NOT FOUND</h1>');
    }

    // res.end('Hello from the server');
})


server.listen(5000, () => {
    console.log("Listening at port 5000")
})