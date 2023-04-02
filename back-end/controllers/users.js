const User = require('../models/User');

exports.updateUser = async (req, res) => {
   if (req.user.id === req.params.id || req.user.isAdmin) {
      if (req.body.password) {
         req.body.password = CryptoJS.AES.encrypt(
            CryptoJS.enc.Utf8.parse(req.body.password),
            process.env.SECRET_KEY
         ).toString();
      }

      try {
         const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
               $set: req.body,
            },
            { new: true }
         );
         res.status(200).json(updatedUser);
      } catch (error) {
         res.status(500).json(error);
      }
   } else {
      return res.status(403).json('You can update only your account!');
   }
};

exports.deleteUser = async (req, res) => {
   if (req.user.id === req.params.id || req.user.isAdmin) {
      try {
         await User.findByIdAndDelete(req.params.id);
         res.status(200).json('User has been deleted');
      } catch (error) {
         res.status(500).json(error);
      }
   } else {
      return res.status(403).json('You can delete only your account!');
   }
};

exports.getUser = async (req, res) => {
   try {
      const user = await User.findById(req.params.id);
      const { password, ...info } = user._doc;
      res.status(200).json(info);
   } catch (error) {
      res.status(500).json(error);
   }
};

exports.getAllUsers = async (req, res) => {
   const query = req.query.new;
   if (req.user.isAdmin) {
      try {
         const users = query
            ? await User.find().sort({ _id: -1 }).limit(5)
            : await User.find();
         res.status(200).json(users);
      } catch (error) {
         res.status(500).json(error);
      }
   } else {
      return res.status(403).json('You are not allowed to see all users');
   }
};

exports.getStats = async (req, res) => {
   // const today = new Date();
   // const lastYear = today.setFullYear(today.setFullYear() - 1);

   try {
      const data = await User.aggregate([
         {
            $project: {
               month: { $month: '$createdAt' },
            },
         },
         {
            $group: {
               _id: '$month',
               total: { $sum: 1 },
            },
         },
      ]);
      res.status(200).json(data);
   } catch (error) {
      res.status(500).json(error);
   }
};
