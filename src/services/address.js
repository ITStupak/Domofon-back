import { AddressesSchemaCollection } from '../db/models/address.js';

export const getAllAddresses = async () => {
  const addresses = await AddressesSchemaCollection.find();
  return addresses;
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
