import { verify } from 'jsonwebtoken';
import User from '../models/User';

export const authGuard = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const { id } = verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(id).select('-password');
      next();
    } catch (error) {
      const err = new Error('Non autorisé, token invalide');
      err.status = 401;
      next(err);
    }
  } else {
    let error = new Error('Non autorisé, pas de token');
    error.statusCode = 401;
    next(error);
  }
};

export const adminGuard = (req, res, next) => {
  if (req.user && req.user.admin) {
    next();
  } else {
    let error = new Error('Réservé aux administrateurs');
    error.statusCode = 401;
    next(error);
  }
};
