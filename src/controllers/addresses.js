import { getAllAddresses, getAddressById } from '../services/address.js';

export const getAddressesController = async (req, res) => {
  const addresses = await getAllAddresses();

  res.json({
    status: 200,
    message: 'Successfully found addresses!',
    data: addresses,
  });
};

export const getAddressByIdController = async (req, res) => {
  const { addressId } = req.params;
  const address = await getAddressById(addressId);

  // Відповідь, якщо адресу не знайдено
  if (!address) {
    res.status(404).json({
	    message: 'Address not found'
    });
    return;
  }

  // Відповідь, якщо адресу знайдено
  res.json({
    status: 200,
    message: `Successfully found address with id ${addressId}!`,
    data: address,
  });
};
