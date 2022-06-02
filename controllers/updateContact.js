const User = require('../models/user')
const BigPromise = require('../middlewares/bigPromise')
const CustomError = require('../utils/customError');
const cookieToken = require('../utils/cookieToken');
const crypto = require("crypto");
const user = require('../models/user');
const contact = require('../models/contact')

exports.updateContact = BigPromise(async (req, res, next) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      throw new NotFoundError('contact not found');
    }

    // update the contact
    contact.set({
      name: req.body.name,
      street: req.body.street,
      city: req.body.city,
      phone: req.body.phone,
    });

    await contact.save();

    res.send(contact);
});