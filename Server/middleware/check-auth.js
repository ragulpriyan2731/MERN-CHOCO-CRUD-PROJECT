import jwt from "jsonwebtoken"

const checkAuth = (req, res, next) => {
  try {
    // Get Authorization header
    const authHeader = req.headers.authorization;

    // Check if header exists
    if (!authHeader) {
      return res.status(401).json({
        message: "Authentication failed. No token provided.",
      });
    }

    // Header format: "Bearer TOKEN"
    const token = authHeader.split(" ")[1];

    // Verify token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Store user information for later use
    req.userData = {
      userId: decodedToken.userId,
      email: decodedToken.email,
    };

    // Continue to the next middleware/controller
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Authentication failed. Invalid token.",
    });
  }
};

export default checkAuth