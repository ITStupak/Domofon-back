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
import { createAddressSchema, updateAddressSchema } from '../validation/addresses.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/addresses', ctrlWrapper(getAddressesController));
router.get('/addresses/:addressId', isValidId, ctrlWrapper(getAddressByIdController));
router.post('/addresses', validateBody(createAddressSchema), ctrlWrapper(createAddressController));
router.delete('/addresses/:addressId', isValidId, ctrlWrapper(deleteAddressController));
router.put('/addresses/:addressId', isValidId, validateBody(updateAddressSchema), ctrlWrapper(upsertAddressController));
router.patch('/addresses/:addressId', isValidId, validateBody(updateAddressSchema), ctrlWrapper(patchAddressController));

export default router;
