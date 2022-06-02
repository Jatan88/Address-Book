const mongoose = require("mongoose");
// const validator = require("validator");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const crypto = require("crypto");

const contactSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      phone: {
        type: String,
        required: true,
      },
    })

    module.exports = mongoose.model("Contact", contactSchema);
