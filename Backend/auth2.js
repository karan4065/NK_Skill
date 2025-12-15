// middleware/auth.js
import jwt from 'jsonwebtoken';
import User from './User.js';
import Admin from './Admins.js';

const auth2 = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log(token)
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    const decoded = jwt.verify(token, "divyansh");

    const user = await Admin.findById(decoded.id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default auth2;