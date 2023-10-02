const express = require("express");
const {
  getAllUsers,
  saveUser,
  getUsersById,
  deleteUser,
} = require("./../controllers/user");
const router = express.Router();

router.get("/", getAllUsers);

router.get("/:id", getUsersById);

router.post("/", saveUser);

router.delete("/:id", deleteUser);

module.exports = router;
