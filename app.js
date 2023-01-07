const express = require("express");
const {redirect} = require ("express/lib/response")

const app = express()

app.use(express.static("public"))

app.get("/home", (request,response,next)=>{
  response.sendFile( __dirname + "/views/home.html")
})

app.get("/about", (request,response,next)=>{
  response.sendFile( __dirname + "/views/about.html")
})

app.get("/albums", (request,response,next)=>{
  response.sendFile( __dirname + "/views/albums.html")
})

app.get("/songs", (request,response,next)=>{
  response.sendFile( __dirname + "/views/songs.html")
})

app.listen(3000, ()=>{
  console.log("si funciona");
})