const isValid = (value) => {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    if (typeof value === "number" && isNaN(value)) return false;
    return true;
};

const isValidName = (name) => /^[a-zA-Z ]+$/.test(name);
const isValidEmail = (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
const isValidPhone = (contact) => /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/.test(contact);
const isValidAddress = (address) => /^[A-Za-z ]{2,}$/.test(address);
const isValidGender = (gender) => /^(male|female|other)$/.test(gender);
const isValidAge = (age) => /^(0?[0-9]|[1-9][0-9]{1,2}|200)$/.test(age);


module.exports = {isValid, isValidName, isValidEmail, isValidPhone, isValidAddress, isValidGender,isValidAge };