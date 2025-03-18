import { AddressesSchemaCollection } from '../db/models/address.js';

export const getAllAddresses = async () => {
  const addresses = await AddressesSchemaCollection.find();
  return addresses;
};

export const getAddressById = async (addressId) => {
  const address = await AddressesSchemaCollection.findById(addressId);
  return address;
};
