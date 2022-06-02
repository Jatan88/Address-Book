const User = require('../models/user')
const BigPromise = require('../middlewares/bigPromise')
const CustomError = require('../utils/customError');
const cookieToken = require('../utils/cookieToken');
const crypto = require("crypto");
const user = require('../models/user');
const contact = require('../models/contact')

exports.addNewContact = BigPromise(async (req, res, next) => {
    const { name, street, city, phone } = req.body;

    const contact = Contact.create({
      name,
      street,
      city,
      phone,
    });

    await contact.save();

    res.status(201).send(contact);
  });