import express from "express";
// allows to take in post request bodies
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

// init express app
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

//set starting routes in all users file
app.use("/users", usersRoutes);

// routes
app.get("/", (req, res) => res.send(`Hello from homepage!`));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
