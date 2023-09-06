import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'Unauthorized! Login required' });
  }

  const [, token] = authorization.split(' ');

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = decoded;
    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized! User invalid' });
    }
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (err) {
    return res.status(401).json({ errors: ['Unauthorized! Token expirado ou inválido'] });
  }
};
