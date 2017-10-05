var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    console.log("Client request url: ", request.url);

    if (request.url === '/cars'){
        fs.readFile('./views/cars.html', 'utf-8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }

    else if (request.url === '/cats'){
        fs.readFile('./views/cats.html', 'utf-8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }

    else if (request.url === '/cars/new'){
        fs.readFile('./views/new.html', 'utf-8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }

    else if (request.url === '/images/car1.jpeg'){
        fs.readFile('./images/car1.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }
    
    else if (request.url === '/images/car2.jpeg'){
        fs.readFile('./images/car2.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }

    else if (request.url === '/images/car3.jpeg'){
        fs.readFile('./images/car3.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }

    else if (request.url === '/images/car4.jpeg'){
        fs.readFile('./images/car4.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/cat1.jpeg'){
        fs.readFile('./images/cat1.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }
    
    else if (request.url === '/images/cat2.jpeg'){
        fs.readFile('./images/cat2.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }

    else if (request.url === '/images/cat3.jpeg'){
        fs.readFile('./images/cat3.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }

    else if (request.url === '/images/cat4.jpeg'){
        fs.readFile('./images/cat4.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }

    else {
        response.writeHead(404);
        response.end('File not found!');
    }
});

server.listen(8000);
console.log("Server running at port 'localhost: 8000'");

