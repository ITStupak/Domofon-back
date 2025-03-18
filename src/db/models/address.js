import { model, Schema } from 'mongoose';

const addressesSchema = new Schema(
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

export const AddressesSchemaCollection = model('addresses', addressesSchema);
