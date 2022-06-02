const User = require('../models/user')
const BigPromise = require('../middlewares/bigPromise')
const CustomError = require('../utils/customError');
const cookieToken = require('../utils/cookieToken');
const crypto = require("crypto");
const user = require('../models/user');
const contact = require('../models/contact')

exports.searchContact = BigPromise(async (req, res, next) => {
    const { query } = req.query;

    const result = await Contact.find({
      name: { $regex: query, $options: 'i' },
    }).limit(5);

    res.send(result);
});