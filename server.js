/*
I acknowledge Seneca College's academic integrity policy. On my honor, I have neither given or received unauthorized aid on this test.
Name: Gunjan Kaur Paul
Student Number- 154609211
*/
const express = require("express");
const app = express();
const path=require("path");
const HTTP_PORT = process.env.PORT || 8080;
var final = require("./final.js");
app.use(express.urlencoded({extended: true}));

function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"finalViews/home.html"));
});


app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname,"finalViews/register.html"));
});
  

app.get("/signIn", (req, res) => {
    res.sendFile(path.join(__dirname,"finalViews/signIn.html"));
});





app.post("/register", (req, res) => {
    console.log("registering");
    console.log(req.body);
    final.register(req.body).then(function (data) {
        res.send("<html><body>"+data+" registered successfully<br><a href=\"/\">Go Home</a></body></html>");
    }).catch(function(error) {
        res.send("<html><body>Error: "+error+"</body></html>");
    });
});
  

app.post("/signIn", (req, res) => {
    final.signIn(req.body).then(function (data) {
        console.log("suuccesful sign");
        html="<html>"+data+" signed in successfully<br><a href=\"/\">Go Home</a></body></html>";
        res.send(html);
    }).catch(function(error) {
        console.log("failed sign");
        res.send("<html><body>"+error+"</body></html>");
    });
});










// This use() will not allow requests to go beyond it
// so we place it at the end of the file, after the other routes.
// This function will catch all other requests that don't match
// any other route handlers declared before it.
// This means we can use it as a sort of 'catch all' when no route match is found.
// We use this function to handle 404 requests to pages that are not found.
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// listen on port 8080\. The default port for http is 80, https is 443\. We use 8080 here
// because sometimes port 80 is in use by other applications on the machine
app.listen(HTTP_PORT, onHttpStart);