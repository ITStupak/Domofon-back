import { Router } from "express";

import {
  getAddressesController,
  getAddressByIdController,
  createAddressController,
  deleteAddressController,
} from '../controllers/addresses.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/addresses', ctrlWrapper(getAddressesController));
router.get('/addresses/:addressId', ctrlWrapper(getAddressByIdController));
router.post('/addresses', ctrlWrapper(createAddressController));
router.delete('/addresses/:addressId', ctrlWrapper(deleteAddressController));

export default router;
