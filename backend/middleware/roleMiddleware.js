// middleware/roleMiddleware.js
exports.protect = (req, res, next) => {
  // Middleware logic to protect routes
  next();
};

exports.roleMiddleware = (role) => {
  return (req, res, next) => {
      // Middleware logic to check for specific role
      if (req.user && req.user.role === role) {
          next();
      } else {
          res.status(403).send('Access denied');
      }
  };
};
