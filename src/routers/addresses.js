import { Router } from "express";

import {
  getAddressesController,
  getAddressByIdController,
  createAddressController,
  deleteAddressController,
  upsertAddressController,
  patchAddressController,
} from '../controllers/addresses.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/addresses', ctrlWrapper(getAddressesController));
router.get('/addresses/:addressId', ctrlWrapper(getAddressByIdController));
router.post('/addresses', ctrlWrapper(createAddressController));
router.delete('/addresses/:addressId', ctrlWrapper(deleteAddressController));
router.put('/addresses/:addressId', ctrlWrapper(upsertAddressController));
router.patch('/addresses/:addressId', ctrlWrapper(patchAddressController));

export default router;
