import { gql } from "nuxt-graphql-request";
import { API } from "../../api/axios";
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

export async function generateFormSchema(formSlug, locale, gqlSSR) {
  const FORM_SCHEMA_QUERY = gql`
    query formSchemaQuery($locale: SiteLocale, $formSlug: String) {
      form(locale: $locale, filter: {slug: {eq: $formSlug}}) {
        schema
      }
    }
  `

  const variables = {
    formSlug,
    locale
  };

  let cmsQuery = await gqlSSR.default.request(FORM_SCHEMA_QUERY, variables);
  let cmsSchemaData = cmsQuery.form.schema;
  
  // populate initial form value
  const formValueObject = {};
  const cmsSchemaObject = {
    ...cmsSchemaData
  };
  
  if (cmsSchemaData.fields) {
    for (let index = 0; index < cmsSchemaData.fields.length; index++) {
      const fieldObject = cmsSchemaData.fields[index];
      formValueObject[fieldObject.objectKey] = fieldObject.initialValue;
  
      // if option field has an api call
      if (fieldObject.config && fieldObject.config.optionsAPI) {
        const optionsResponse = await API.formDynamicOptions(fieldObject.config.optionsAPI.url);
        const optionsData = optionsResponse.data.data;
  
        const formattedOptionsArray = [];
        optionsData.map((option, i) => {
          const optionsObject = {
            label: option[fieldObject.config.optionsAPI.labelKey],
            value: option[fieldObject.config.optionsAPI.valueKey]
          };
          formattedOptionsArray.push(optionsObject);
        });
  
        cmsSchemaObject.fields[index].config.options = formattedOptionsArray;
      };
  
      // NESTED
      // check if component is multiform
      if (fieldObject.component === "MultiForm" && fieldObject.config && fieldObject.config.fields.length > 0) {
        for (let nestedIndex = 0; nestedIndex < fieldObject.config.fields.length; nestedIndex++) {
          const nestedFieldObject = fieldObject.config.fields[nestedIndex];
          console.log(nestedFieldObject)
          if (nestedFieldObject.config && nestedFieldObject.config.optionsAPI) {
            const nestedOptionsResponse = await API.formDynamicOptions(nestedFieldObject.config.optionsAPI.url);
            const nestedOptionsData = nestedOptionsResponse.data.data;
  
            console.log(nestedOptionsData)
  
            const nestedFormattedOptionsArray = [];
  
            nestedOptionsData.map((option, i) => {
              const optionsObject = {
                label: option[nestedFieldObject.config.optionsAPI.labelKey],
                value: option[nestedFieldObject.config.optionsAPI.valueKey]
              };
              nestedFormattedOptionsArray.push(optionsObject);
            });
  
            nestedFieldObject.config.options = nestedFormattedOptionsArray;
          };
        };
      };
    };
  };

  return {
    formValues: formValueObject,
    schema: cmsSchemaObject
  };
};

export function initialiseVuelidateValidationObject(schema) {
  const validationObject = {};

  if (schema && schema.fields && schema.fields.length > 0) {
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

      // if this is a multiform
      if (field.config && field.config.fields && field.config.fields.length > 0) {
        const nestedValidationObject = initialiseVuelidateValidationObject(field.config);
        validationObject[field.objectKey] = {
          $each: {
            ...validationObject[field.objectKey],
            ...nestedValidationObject
          }
        }
      }
    })
  };

  return validationObject;
};

export function conditionalFormDisplay(schema, form) {
  const formValues = {
    ...form
  };
  // cross check login form value with schema fields dependant value
  schema.fields.forEach(field => {
    if (field.validations) {
      if (field.validations.dependants) {
        field.validations.dependants.forEach(dependant => {
          if (formValues[dependant.objectKey] === dependant.ifDependantValueEquals) {
            formValues[field.objectKey] = dependant.setFieldValue
          };

          if (formValues[dependant.objectKey] > dependant.ifDependantValueIsMoreThan) {
            formValues[field.objectKey] = dependant.setFieldValue
          };

          if (formValues[dependant.objectKey] < dependant.ifDependantValueIsLessThan) {
            formValues[field.objectKey] = dependant.setFieldValue
          };
        });
      };
    };
  })

  console.log(formValues);
};