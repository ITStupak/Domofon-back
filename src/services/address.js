import { AddressesSchemaCollection } from '../db/models/address.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from '../constants/index.js';

export const getAllAddresses = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const addressesQuery = AddressesSchemaCollection.find();
  const addressesCount = await AddressesSchemaCollection.find()
    .merge(addressesQuery)
    .countDocuments();

  const addresses = await addressesQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData(addressesCount, perPage, page);

  return {
    data: addresses,
    ...paginationData,
  };
};

export const getAddressById = async (addressId) => {
  const address = await AddressesSchemaCollection.findById(addressId);
  return address;
};

export const createAddress = async (payload) => {
  const address = await AddressesSchemaCollection.create(payload);
  return address;
};

export const deleteAddress = async (addressId) => {
  const address = await AddressesSchemaCollection.findOneAndDelete({
    _id: addressId,
  });
  return address;
};

export const updateAddress = async (addressId, payload, options = {}) => {
  const rawResult = await AddressesSchemaCollection.findOneAndUpdate(
    { _id: addressId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    address: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
