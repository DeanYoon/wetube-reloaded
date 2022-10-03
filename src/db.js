import mongoose from "mongoose";
console.log(process.env.COOKIE_SECRET, process.env.DB_URL);

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅Connected to DB");
const handleError = (error) => console.log("DB Error", error);

db.on("error", (error) => console.log("DB Error", error));
db.once("open", handleOpen);
