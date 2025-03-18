import { Router } from "express";

import {
  getAddressesController,
  getAddressByIdController,
} from '../controllers/addresses.js';

const router = Router();

router.get('/addresses', getAddressesController);
router.get('/addresses/:addressId', getAddressByIdController);

export default router;
