import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { addressId } = req.params;
  if (!isValidObjectId(addressId)) {
    throw createHttpError(400, 'Bad Request');
  }

  next();
};
