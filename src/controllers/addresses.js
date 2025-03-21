import { getAllAddresses, getAddressById, createAddress, deleteAddress, updateAddress } from '../services/address.js';
import createHttpError from 'http-errors';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';

export const getAddressesController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const addresses = await getAllAddresses({
    page,
    perPage,
    sortBy,
    sortOrder,
  });

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

  // Відповідь, якщо нову адресу створено
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
    next(createHttpError(404, 'Address not found')); // Відповідь, якщо адресу не знайдено
    return;
  }

  // Статус 204 без відповіді, якщо адресу успішно видалено
  res.status(204).send();
};

export const upsertAddressController = async (req, res, next) => {
  const { addressId } = req.params;

  const result = await updateAddress(addressId, req.body, {
    upsert: true,
  });

  if (!result) {
    next(createHttpError(404, 'Address not found')); // Відповідь, якщо адресу не знайдено
    return;
  }

  const status = result.isNew ? 201 : 200;

  // Відповідь, якщо адресу створено (201) або оновлено (200)
  res.status(status).json({
    status,
    message: `Successfully upserted an address!`,
    data: result.address,
  });
};


export const patchAddressController = async (req, res, next) => {
  const { addressId } = req.params;
  const result = await updateAddress(addressId, req.body);

  if (!result) {
    next(createHttpError(404, 'Address not found')); // Відповідь, якщо адресу не знайдено
    return;
  }

  // Відповідь, якщо адресу оновлено
  res.json({
    status: 200,
    message: `Successfully patched an address!`,
    data: result.address,
  });
};
