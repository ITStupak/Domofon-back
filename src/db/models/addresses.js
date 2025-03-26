import { model, Schema } from 'mongoose';

// Центральна база адресів (основна)
const mainAddressSchema = new Schema(
  {
    address: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: false,
    },
    comment: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const MainAddress = model('addresses', mainAddressSchema);


// Особиста база користувача
const userAddressSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    address: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: false,
    },
    comment: {
      type: String,
      required: false,
    },
    sourceId: {
      type: Schema.Types.ObjectId,
      ref: "MainAddress"
    }, // ID вихідної адреси з MainAddress
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const UserAddress = model('UserAddresses', userAddressSchema);
