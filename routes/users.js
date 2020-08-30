import express from "express";
import { v4 as uuidv4 } from "uuid";

import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";
uuidv4();

// init router
const router = express.Router();

//all routes in here starts with /users

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
