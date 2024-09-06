import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>hello guys</h1>");
  });

app.get("/contact", (req, res) => {
    res.send("<h1>Contact me</h1><p>999</p>");
});

app.get("/about", (req, res) => {
    res.send("<h1>about me: I'm lovely</h1>");
});


app.listen(port, () => {
console.log(`server running on port ${port}`)
});