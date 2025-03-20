import Joi from 'joi';

export const createAddressSchema = Joi.object({
    address: Joi.string().min(3).max(30).required().messages({
    // Кастомізація повідомлення для типу "string"
    'string.base': 'address should be a string',
    'string.min': 'address should have at least {#limit} characters',
    'string.max': 'aAddress should have at most {#limit} characters',
    'any.required': 'address is required',
  }),
  number: Joi.string().min(1).max(5).required().messages({
    'string.base': 'number should be a string',
    'string.min': 'number should have at least {#limit} characters',
    'string.max': 'number should have at most {#limit} characters',
    'any.required': 'number is required',
  }),
  code: Joi.string().min(3).max(20).required().messages({
    'string.base': 'code should be a string',
    'string.min': 'code should have at least {#limit} characters',
    'string.max': 'code should have at most {#limit} characters',
    'any.required': 'code is required',
  }),
  info: Joi.string().max(30).messages({
    'string.base': 'code should be a string',
    'string.max': 'code should have at most {#limit} characters',
  }),
  comment: Joi.string().max(30).messages({
    'string.base': 'code should be a string',
    'string.max': 'code should have at most {#limit} characters',
  }),
});

// const dataToValidate = {
//   address: 'Stefana Zeromskiego',
//   number: '53',
//   code: 'A1234',
//   info: '2 pietro, m.14',
//   comment: 'check validation',
// };

// const validationResult = createAddressSchema.validate(dataToValidate, {
//     abortEarly: false,
// });
// if (validationResult.error) {
//   console.error(validationResult.error.message);
// } else {
//   console.log('Data is valid!');
// }
