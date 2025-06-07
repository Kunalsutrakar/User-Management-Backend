"use strict";

var express = require("express");

var Route = express.Router();

var _require = require("../controllers/userController"),
    addUser = _require.addUser,
    getUsers = _require.getUsers,
    updateUser = _require.updateUser;

Route.post("/addUser", addUser);
Route.get("/userDetails", getUsers);
Route.put("/updateUser/:id", updateUser);
module.exports = Route; // HW - Update(valadation), Delete Api , getUsers - query (Male,Female)