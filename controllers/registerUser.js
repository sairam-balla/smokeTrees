const User = require("../models/User");
const Address = require("../models/Address");

const registerUser = async (req, res) => {
  const { userName, address } = req.body;
  try {
    const checkUser = await User.findOne({ userName });
    if (checkUser)
      return res.json({
        success: false,
        message: "User Already exists with the same username! Please try again",
      });
    const newUser = new User({
      userName,
    });
    const newUserAddress = new Address({
      userName,
      address,
    });

    await newUser.save();
    await newUserAddress.save();
    res.status(200).json({
      success: true,
      message: "Registration successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error._message,
    });
  }
};

module.exports = registerUser;
