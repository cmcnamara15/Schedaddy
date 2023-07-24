import React from "react";

const regex = new RegExp("pattern");
const passRegex = new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+={}[\]:;<>,.?/~]).{8,}$');



export default PassValidate;