const http= require("http")
const port=8080
const fs=require("fs");
const path = require("path");
const server=http.createServer((req,res)=>
{
    let reqeustpath = "." + req.url;

    if(reqeustpath === "./"){
        fs.readFile("index.html", (err,data)=>{
            if(err){
                res.writeHead(404 ,{"Content-Type": "text/html"});
                res.end();
            }
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
            })
        }
        else{
          let ext = path.extname(reqeustpath);
          fs.readFile(`${reqeustpath}`,(err,data)=>{
              if(err){
              console.log(err)
              res.writeHead(404 ,{"Content-Type": "text/html"})
              res.end("Error 404 Page not found!");
              }
            
          else{
            switch (ext){
              case ".js":
                res.writeHead(200, {"Content-Type": "text/javascript"});
               break;
              case ".css":
                res.writeHead(200, {"Content-Type": "text/css"});
                break;
              case ".json":
                res.writeHead(200, {"Content-Type": "application/json"});
                break;
              case ".ico":
                  res.writeHead(200, {"Content-Type": "image/vnd.microsoft.icon"});
              break;  
              case ".svg":
                res.writeHead(200, {"Content-Type": "image/svg+xml"});
                break;
              case ".png":
                res.writeHead(200, {"Content-Type": "image/png"});  
                break;
              case ".jpg":
                res.writeHead(200, {"Content-Type": "image/jpg"});
                break;
              case ".svg":
                res.writeHead(200, {"Content-Type": "image/svg+xml"});
                break;
              case ".jpeg":
                res.writeHead(200, {"Content-Type": "image/jpeg"});
                break;
              default:
                res.writeHead(404 ,{"Content-Type": "text/html"});
                res.write("Error 404 Not Found!");
                res.end();
                  break;
               }
              res.write(data);
              res.end();
            }
          })    
     }
    })
 server.listen(port, function() {
   console.log(`Server listen port ${port}`)
      });