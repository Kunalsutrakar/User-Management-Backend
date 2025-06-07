"use strict";

var userModel = require("../models/userModel"); // const validation = require("./Validator");


var _require = require("./Validator"),
    isValid = _require.isValid,
    isValidName = _require.isValidName,
    isValidEmail = _require.isValidEmail,
    isValidPhone = _require.isValidPhone;

var mongoose = require("mongoose"); // Add Users


var addUser = function addUser(req, res) {
  var userData, userName, userEmail, userContact, userAddress, gender, age, duplicateEmail, duplicateContact, user;
  return regeneratorRuntime.async(function addUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          userData = req.body;

          if (!(Object.keys(userData).length === 0)) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            msg: "Bad Request, No Data Provided"
          }));

        case 4:
          userName = userData.userName, userEmail = userData.userEmail, userContact = userData.userContact, userAddress = userData.userAddress, gender = userData.gender, age = userData.age; // User Name Validation

          if (isValid(userName)) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            msg: "User Name is Required"
          }));

        case 7:
          if (isValidName(userName)) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            msg: "Invalid User Name"
          }));

        case 9:
          if (isValid(userEmail)) {
            _context.next = 11;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            msg: "User Email is Required"
          }));

        case 11:
          if (isValidEmail(userEmail)) {
            _context.next = 13;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            msg: "Invalid User Email"
          }));

        case 13:
          _context.next = 15;
          return regeneratorRuntime.awrap(userModel.findOne({
            userEmail: userEmail
          }));

        case 15:
          duplicateEmail = _context.sent;

          if (!duplicateEmail) {
            _context.next = 18;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            msg: "Email Already Exists"
          }));

        case 18:
          if (isValid(userContact)) {
            _context.next = 20;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            msg: "User Contact is Required"
          }));

        case 20:
          if (isValidPhone(userContact)) {
            _context.next = 22;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            msg: "Invalid User Contact"
          }));

        case 22:
          _context.next = 24;
          return regeneratorRuntime.awrap(userModel.findOne({
            userContact: userContact
          }));

        case 24:
          duplicateContact = _context.sent;

          if (!duplicateContact) {
            _context.next = 27;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            msg: "User Contact Already Exists"
          }));

        case 27:
          if (isValid(userAddress)) {
            _context.next = 29;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            msg: "User Address is Required"
          }));

        case 29:
          if (isValid(gender)) {
            _context.next = 31;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            msg: "Gender is Required"
          }));

        case 31:
          if (isValid(age)) {
            _context.next = 33;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            msg: "Age is Required"
          }));

        case 33:
          _context.next = 35;
          return regeneratorRuntime.awrap(userModel.create(userData));

        case 35:
          user = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            msg: "User Data Added Successfully",
            user: user
          }));

        case 39:
          _context.prev = 39;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", res.status(500).json({
            msg: "Internal Server Error"
          }));

        case 43:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 39]]);
}; // Get All Users


var getUsers = function getUsers(req, res) {
  var userData;
  return regeneratorRuntime.async(function getUsers$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(userModel.find());

        case 3:
          userData = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            userData: userData
          }));

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          return _context2.abrupt("return", res.status(500).json({
            msg: "Internal Server Error"
          }));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Update User Data


var updateUser = function updateUser(req, res) {
  var userId, data, userName, userEmail, userContact, userAddress, gender, age, duplicateEmail, duplicateContact, update;
  return regeneratorRuntime.async(function updateUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          userId = req.params.id;
          data = req.body;

          if (mongoose.Types.ObjectId.isValid(userId)) {
            _context3.next = 5;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            msg: "Invalid User Id"
          }));

        case 5:
          if (!(Object.keys(data).length === 0)) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            msg: "Bad Request, No Data Provided"
          }));

        case 7:
          userName = data.userName, userEmail = data.userEmail, userContact = data.userContact, userAddress = data.userAddress, gender = data.gender, age = data.age; // Validate userName

          if (!(userName !== undefined)) {
            _context3.next = 13;
            break;
          }

          if (isValid(userName)) {
            _context3.next = 11;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            msg: "User Name is Required"
          }));

        case 11:
          if (isValidName(userName)) {
            _context3.next = 13;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            msg: "Invalid User Name"
          }));

        case 13:
          if (!(userEmail !== undefined)) {
            _context3.next = 23;
            break;
          }

          if (isValid(userEmail)) {
            _context3.next = 16;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            msg: "User Email is Required"
          }));

        case 16:
          if (isValidEmail(userEmail)) {
            _context3.next = 18;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            msg: "Invalid User Email"
          }));

        case 18:
          _context3.next = 20;
          return regeneratorRuntime.awrap(userModel.findOne({
            userEmail: userEmail
          }));

        case 20:
          duplicateEmail = _context3.sent;

          if (!duplicateEmail) {
            _context3.next = 23;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            msg: "Email Already Exists"
          }));

        case 23:
          if (!(userContact !== undefined)) {
            _context3.next = 33;
            break;
          }

          if (isValid(userContact)) {
            _context3.next = 26;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            msg: "User Contact is Required"
          }));

        case 26:
          if (isValidPhone(userContact)) {
            _context3.next = 28;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            msg: "Invalid User Contact"
          }));

        case 28:
          _context3.next = 30;
          return regeneratorRuntime.awrap(userModel.findOne({
            userContact: userContact
          }));

        case 30:
          duplicateContact = _context3.sent;

          if (!duplicateContact) {
            _context3.next = 33;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            msg: "User Contact Already Exists"
          }));

        case 33:
          if (!(userAddress !== undefined && !isValid(userAddress))) {
            _context3.next = 35;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            msg: "User Address is Required"
          }));

        case 35:
          if (!(gender !== undefined && !isValid(gender))) {
            _context3.next = 37;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            msg: "Gender is Required"
          }));

        case 37:
          if (!(age !== undefined && !isValid(age))) {
            _context3.next = 39;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            msg: "Age is Required"
          }));

        case 39:
          _context3.next = 41;
          return regeneratorRuntime.awrap(userModel.findByIdAndUpdate(userId, data, {
            "new": true
          }));

        case 41:
          update = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            msg: "User Data Updated Successfully",
            update: update
          }));

        case 45:
          _context3.prev = 45;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          return _context3.abrupt("return", res.status(500).json({
            msg: "Internal Server Error"
          }));

        case 49:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 45]]);
}; // Get Users By Gender


var getUserByGender = function getUserByGender(req, res) {
  var gender, users;
  return regeneratorRuntime.async(function getUserByGender$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          gender = req.query.gender;

          if (isValid(gender)) {
            _context4.next = 4;
            break;
          }

          return _context4.abrupt("return", res.status(400).json({
            msg: "Gender is Required"
          }));

        case 4:
          _context4.next = 6;
          return regeneratorRuntime.awrap(userModel.find({
            gender: gender.toLowerCase()
          }));

        case 6:
          users = _context4.sent;

          if (!(users.length === 0)) {
            _context4.next = 9;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            msg: "No Users Found"
          }));

        case 9:
          return _context4.abrupt("return", res.status(200).json({
            users: users
          }));

        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          return _context4.abrupt("return", res.status(500).json({
            msg: "Internal Server Error"
          }));

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 12]]);
};

module.exports = {
  addUser: addUser,
  getUsers: getUsers,
  updateUser: updateUser,
  getUserByGender: getUserByGender
};