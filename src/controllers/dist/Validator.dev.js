"use strict";

var isValid = function isValid(value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  if (typeof value === "number" && isNaN(value)) return false;
  return true;
};

var isValidName = function isValidName(name) {
  return /^[a-zA-Z ]+$/.test(name);
};

var isValidEmail = function isValidEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

var isValidPhone = function isValidPhone(contact) {
  return /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/.test(contact);
};

var isValidAddress = function isValidAddress(address) {
  return /^[A-Za-z ]{2,}$/.test(address);
};

var isValidGender = function isValidGender(gender) {
  return /^(male|female|other)$/.test(gender);
};

var isValidAge = function isValidAge(age) {
  return /^(0?[0-9]|[1-9][0-9]{1,2}|200)$/.test(age);
};

module.exports = {
  isValid: isValid,
  isValidName: isValidName,
  isValidEmail: isValidEmail,
  isValidPhone: isValidPhone,
  isValidAddress: isValidAddress,
  isValidGender: isValidGender,
  isValidAge: isValidAge
};