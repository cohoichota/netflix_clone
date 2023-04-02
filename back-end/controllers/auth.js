const User = require('../models/User');
const CryptoJS = require('crypto-js');
require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.postRegister = async (req, res) => {
   const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
         CryptoJS.enc.Utf8.parse(req.body.password),
         process.env.SECRET_KEY
      ).toString(),
   });

   try {
      const user = await newUser.save();
      res.status(201).json(user);
   } catch (error) {
      res.status(500).json(error);
   }
};

exports.postLogin = async (req, res) => {
   try {
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
         return res.status(401).json('Wrong password or username!');
      }

      const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
      var originalPassword = bytes.toString(CryptoJS.enc.Utf8);
      if (originalPassword !== req.body.password) {
         return res.status(401).json('Wrong password or username!');
      } else {
         const { password, ...info } = user._doc;
         const accessToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.SECRET_KEY,
            { expiresIn: '5d' }
         );
         return res.status(200).json({ ...info, accessToken });
      }
   } catch (error) {
      res.status(500).json(error);
   }
};
