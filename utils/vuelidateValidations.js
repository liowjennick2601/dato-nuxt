import {
  required,
  minLength,
  maxLength,
  minValue,
  maxValue,
  alpha,
  alphaNum,
  numeric,
  integer,
  decimal,
  email,
  ipAddress,
  url
} from "vuelidate/lib/validators";

export function initialiseVuelidateValidationObject(schema) {
  const validationObject = {};
  schema.fields.map(field => {
    validationObject[field.objectKey] = {};

    if (field.validations) {
      if (field.validations.required) {
        validationObject[field.objectKey] = {
          ...validationObject[field.objectKey],
          required
        }
      };

      if (field.validations.minLength) {
        validationObject[field.objectKey] = {
          ...validationObject[field.objectKey],
          minLength: minLength(parseInt(field.validations.minLength))
        }
      };

      if (field.validations.maxLength) {
        validationObject[field.objectKey] = {
          ...validationObject[field.objectKey],
          maxLength: maxLength(parseInt(field.validations.maxLength))
        }
      };

      if (field.validations.minValue) {
        validationObject[field.objectKey] = {
          ...validationObject[field.objectKey],
          minValue: minValue(parseInt(field.validations.minValue))
        }
      };

      if (field.validations.maxValue) {
        validationObject[field.objectKey] = {
          ...validationObject[field.objectKey],
          maxValue: maxValue(parseInt(field.validations.maxValue))
        }
      };

      if (field.validations.alpha) {
        validationObject[field.objectKey] = {
          ...validationObject[field.objectKey],
          alpha
        }
      };

      if (field.validations.alphaNum) {
        validationObject[field.objectKey] = {
          ...validationObject[field.objectKey],
          alphaNum
        }
      };
    
      if (field.validations.numeric) {
        validationObject[field.objectKey] = {
          ...validationObject[field.objectKey],
          numeric
        }
      };

      if (field.validations.integer) {
        validationObject[field.objectKey] = {
          ...validationObject[field.objectKey],
          integer
        }
      };

      if (field.validations.decimal) {
        validationObject[field.objectKey] = {
          ...validationObject[field.objectKey],
          decimal
        }
      };

      if (field.validations.email) {
        validationObject[field.objectKey] = {
          ...validationObject[field.objectKey],
          email
        }
      };

      if (field.validations.ipAddress) {
        validationObject[field.objectKey] = {
          ...validationObject[field.objectKey],
          ipAddress
        }
      };

      if (field.validations.url) {
        validationObject[field.objectKey] = {
          ...validationObject[field.objectKey],
          url
        }
      };
    };
  })

  return validationObject;
}