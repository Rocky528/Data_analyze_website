const User = require("../model/User");
const bcrypt = require('bcryptjs');


const Register = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.pAss);
    User.findOne({ email: req.body.eMail })
        .then(Userexisting => {
            if (Userexisting) {
                res.send("User already exists!");
            } else {
                const user = new User({
                    firstName: req.body.fName,
                    lastname: req.body.lName,
                    username: req.body.uName,
                    email: req.body.eMail,
                    address: req.body.aDdress,
                    state: req.body.sTate,
                    country: req.body.cOuntry,
                    password: hashedPassword,
                    producttype: req.body.pRotype,
                    paymentInfo: req.body.pAyment,
                });
                return user.save();
            }
        })
        .then(savedUser => {
            res.send(`User ${savedUser.email} registered successfully!`);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("An error occurred while registering user!");
        });
}

const Login = async (req, res) => {
    let isPasswordCorrect;
    User.findOne({ email: req.body.eMail }).then(user => {
        if (user) {
            isPasswordCorrect = bcrypt.compareSync(req.body.pAss, user.password);
            if (isPasswordCorrect) {
                res.send("You have successfully logged in!");
            }
            else {
                res.send("Incorrect Password!");
            }
        }
        else {
            res.send("User is not found");
        }
    })
}

const ForgotPass = (req, res) => {
    const pass = User.findOne({ email: req.body.email });

    if (pass) {
        res.send(User.email)
    }
    else {
        res.send("User is not exist")
    }
}

const NewPass = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.pass);
    const filter = { email: req.body.email };
    const update = { $set: { password: hashedPassword } };
    const options = { upsert: true, returnOriginal: false };

    // Update the user's password
    User.findOneAndUpdate(filter, update, options)
        .then(updatedUser => {
            if (updatedUser) {
                res.send("Your password has been successfully changed!")
            }
        })
        .catch(error => {
            if (error)
                res.send("Password change failed.");
        });
}

module.exports = { Register, Login, ForgotPass, NewPass };