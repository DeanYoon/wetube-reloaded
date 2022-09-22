import express from "express";
import morgan from "morgan";
const PORT = 4000;

const app = express(); //Create Application
const logger = morgan("dev");

function handleHome(req, res) {
  return res.send("Hello!");
}

function login(req, res) {
  return res.send("login");
}

app.use(logger);
app.get("/", handleHome);
app.get("/login", login);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} !!`);

app.listen(PORT, handleListening); //외부 접속 리슨
