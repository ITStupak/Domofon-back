import { getAllAddresses, getAddressById, createAddress, deleteAddress } from '../services/address.js';
import createHttpError from 'http-errors';

export const getAddressesController = async (req, res) => {
  const addresses = await getAllAddresses();

  res.json({
    status: 200,
    message: 'Successfully found addresses!',
    data: addresses,
  });
};

export const getAddressByIdController = async (req, res, next,) => {
  const { addressId } = req.params;
  const address = await getAddressById(addressId);

  // Відповідь, якщо адресу не знайдено
  if (!address) {
    throw createHttpError(404, 'Address not found');
  }

  // Відповідь, якщо адресу знайдено
  res.json({
    status: 200,
    message: `Successfully found address with id ${addressId}!`,
    data: address,
  });
};

export const createAddressController = async (req, res) => {
  const address = await createAddress(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created an address!`,
    data: address,
  });
};

export const deleteAddressController = async (req, res, next) => {
  const { addressId } = req.params;
  const address = await deleteAddress(addressId);

  if (!address) {
    next(createHttpError(404, 'Address not found'));
    return;
  }

  res.status(204).send();
};
