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
import { validateBody } from '../middlewares/validateBody.js';
import { createAddressSchema } from '../validation/addresses.js';

const router = Router();

router.get('/addresses', ctrlWrapper(getAddressesController));
router.get('/addresses/:addressId', ctrlWrapper(getAddressByIdController));
router.post('/addresses', validateBody(createAddressSchema), ctrlWrapper(createAddressController));
router.delete('/addresses/:addressId', ctrlWrapper(deleteAddressController));
router.put('/addresses/:addressId', validateBody(createAddressSchema), ctrlWrapper(upsertAddressController));
router.patch('/addresses/:addressId', validateBody(createAddressSchema), ctrlWrapper(patchAddressController));

export default router;
