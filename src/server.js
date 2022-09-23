import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
const PORT = 4000;

console.log(process.cwd());

const app = express(); //Create Application
const logger = morgan("short");
app.use(logger);

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/", globalRouter);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} !!`);

app.listen(PORT, handleListening); //외부 접속 리슨
