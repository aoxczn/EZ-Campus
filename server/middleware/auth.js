import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer '))
    return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const token = header.split(' ')[1];
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};