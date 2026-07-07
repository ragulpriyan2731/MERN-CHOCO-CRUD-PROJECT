import users from '../Model/usermodel.js'
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }
    const saltround = 12
    const salt = await bcrypt.genSalt(saltround)
    // Hash password
    const hashedPassword = await bcrypt.hash(password,salt);

    // Create user
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({
      message: "Signup Successful"
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Something went wrong"
    });
  }
};

export const login = async (req, res) => {

  const { email, password } = req.body;

  try {

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(401).json({
        message: "Invalid Credentials"
      });
    }

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isValidPassword) {
      return res.status(401).json({
        message: "Invalid Credentials"
      });
    }

    // Generate JWT

    const token = jwt.sign(
      {
        userId: existingUser._id,
        email: existingUser.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d"
      }
    );

    res.status(200).json({
      message: "Login Successful",
      token,
      userId: existingUser._id,
      name: existingUser.name
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Login Failed"
    });

  }

};
