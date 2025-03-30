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
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getAddressesController));
router.get('/:addressId', isValidId, ctrlWrapper(getAddressByIdController));
router.post('/', validateBody(createAddressSchema), ctrlWrapper(createAddressController));
router.delete('/:addressId', isValidId, ctrlWrapper(deleteAddressController));
router.put('/:addressId', isValidId, validateBody(updateAddressSchema), ctrlWrapper(upsertAddressController));
router.patch('/:addressId', isValidId, validateBody(updateAddressSchema), ctrlWrapper(patchAddressController));

export default router;
