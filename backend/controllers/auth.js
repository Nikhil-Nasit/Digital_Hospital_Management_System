const bcrypt = require("bcryptjs");
// const { validationResult } = require('express-validator');
const User = require("../models/user");

// exports.getLogin = (req, res, next) => {
//   res.send("Login");
// };

exports.postLogin = (req, res, next) => {
  // const email = req.body.email;
  // const password = req.body.password;

  const { email, password } = req.body;

  User.findOne({ email: email }).then((user) => {
    if (!user) {
      // req.flash('error', 'Invalid email or password.');
      // return res.redirect('/login');
      // console.log("Invalid Credentials");
      // res.json(req.body);
      res.json({ message: "Invalid Credentials" });
    } else {
      bcrypt
        .compare(password, user.password)
        .then((doMatch) => {
          if (doMatch) {
            // req.session.isLoggedIn = true;
            // req.session.user = user;
            // return req.session.save(err => {
            //   console.log(err);
            //   res.redirect('/');
            // });
            // console.log("Login Successfully");
            res.json(req.body);
          } else {
            res.json({message : 'Invalid Credentials'});
          }
          //   req.flash('error', 'Invalid email or password.');
          //   res.redirect('/login');
          //
        })
        .catch((err) => {
          console.log(err);
          //   res.redirect('/login');
        });
    }
  });
  // .catch(err => console.log(err));
};

exports.postSingup = (req, res, next) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return next(
  //     new HttpError('Invalid inputs passed, please check your data.', 422)
  //   );
  // }
  // const firstName = req.body.firstName;
  // const lastName = req.body.lastName;
  // const email = req.body.email;
  // const mobileNumber = req.body.mobileNumber;
  // const password = req.body.password;
  // const confirmPassword = req.body.confirmPassword;
  const {
    firstName,
    lastName,
    email,
    mobileNumber,
    password,
    confirmPassword,
  } = req.body;
  //   const user = new User({
  //     firstName: firstName,
  //     lastName: lastName,
  //     email: email,
  //     mobileNumber: mobileNumber,
  //     password: password,
  //     confirmPassword: confirmPassword,
  //   })

  User.findOne({ email: email })
    .then((userDoc) => {
      if (userDoc) {
        // req.flash(
        //   'error',
        //   'E-Mail exists already, please pick a different one.'
        // );
        // return res.redirect('/signup');
        // console.log("Email id already exsit");
        return res.json({ message: false });
      }
      return bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
          const user = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobileNumber: mobileNumber,
            password: hashedPassword,
            confirmPassword: hashedPassword,
          });
          return user.save();
        })
        .then((result) => {
          //   res.redirect('/login');
          //   return transporter.sendMail({
          //     to: email,
          //     from: 'shop@node-complete.com',
          //     subject: 'Signup succeeded!',
          //     html: '<h1>You successfully signed up!</h1>'
          //   });
          res.send({ message: true });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
