import Joi from 'joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .regex(/^[A-Z][a-z]*$/, 'capitalize format')
    .required()
    .messages({
      'string.base': 'First name must be a string',
      'string.empty': 'First name is required',
      'string.max': 'First name can not be more than 20 characters',
      'string.pattern.name': '{#label} is not in capitalize format',
    }),
  middleName: Joi.string().trim().allow(''),
  lastName: Joi.string()
    .trim()
    .pattern(/^[A-Za-z]+$/, 'letters')
    .required()
    .messages({
      'string.empty': 'Last name is required',
      'string.pattern.name': '{#label} is not valid',
    }),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().required().messages({
    'string.empty': 'Father name is required',
  }),
  fatherOccupation: Joi.string().trim().required().messages({
    'string.empty': 'Father occupation is required',
  }),
  fatherContactNo: Joi.string().trim().required().messages({
    'string.empty': 'Father contact no is required',
  }),
  motherName: Joi.string().trim().required().messages({
    'string.empty': 'Mother name is required',
  }),
  motherOccupation: Joi.string().trim().required().messages({
    'string.empty': 'Mother occupation is required',
  }),
  motherContactNo: Joi.string().trim().required().messages({
    'string.empty': 'Mother contact no is required',
  }),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.empty': 'Local Guardian name is required',
  }),
  occupation: Joi.string().trim().required().messages({
    'string.empty': 'Local Guardian occupation is required',
  }),
  contactNo: Joi.string().trim().required().messages({
    'string.empty': 'Local Guardian contact no is required',
  }),
  address: Joi.string().trim().required().messages({
    'string.empty': 'Local Guardian address is required',
  }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().trim().required().messages({
    'string.empty': 'Student id is required',
  }),
  password: Joi.string().trim().required().messages({
    'string.empty': 'Password id is required',
  }),
  name: userNameValidationSchema.required().messages({
    'any.required': 'Student name is required',
  }),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'any.only': '{#value} is not valid',
    'any.required': 'Student gender is required',
  }),
  dateOfBirth: Joi.string(),
  email: Joi.string().email().required().messages({
    'string.email': '{#value} is not a valid email type',
    'any.required': 'Student email is required',
  }),
  contactNo: Joi.string().trim().required().messages({
    'string.empty': 'Student contact no is required',
  }),
  emergencyContactNo: Joi.string().trim().required().messages({
    'string.empty': 'Student emergency contact no is required',
  }),
  bloodGroup: Joi.string().valid(
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
  ),
  presentAddress: Joi.string().trim().required().messages({
    'string.empty': 'Student present address is required',
  }),
  permanentAddress: Joi.string().trim().required().messages({
    'string.empty': 'Student permanent address is required',
  }),
  guardian: guardianValidationSchema.required().messages({
    'any.required': 'Guardian information is required',
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    'any.required': 'Local Guardian information is required',
  }),
  profileImg: Joi.string().allow(''),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
});

export default studentValidationSchema;
