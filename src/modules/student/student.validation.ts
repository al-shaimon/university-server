import { z } from 'zod';

// Define the Zod schema for UserName
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .max(20, 'First name can not be more than 20 characters')
    .nonempty('First name is required')
    .trim(),
  middleName: z.string().optional(),
  lastName: z.string().nonempty('Last name is required').trim(),
});

// Define the Zod schema for Guardian
const guardianValidationSchema = z.object({
  fatherName: z.string().nonempty('Father name is required').trim(),
  fatherOccupation: z.string().nonempty('Father occupation is required').trim(),
  fatherContactNo: z.string().nonempty('Father contact no is required').trim(),
  motherName: z.string().nonempty('Mother name is required').trim(),
  motherOccupation: z.string().nonempty('Mother occupation is required').trim(),
  motherContactNo: z.string().nonempty('Mother contact no is required').trim(),
});

// Define the Zod schema for LocalGuardian
const localGuardianValidationSchema = z.object({
  name: z.string().nonempty('Local Guardian name is required').trim(),
  occupation: z
    .string()
    .nonempty('Local Guardian occupation is required')
    .trim(),
  contactNo: z
    .string()
    .nonempty('Local Guardian contact no is required')
    .trim(),
  address: z.string().nonempty('Local Guardian address is required').trim(),
});

// Define the Zod schema for Student
const studentValidationSchema = z.object({
  id: z.string().nonempty('Student id is required').trim(),
  password: z.string().nonempty('Password id is required').max(20),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other'], {
    invalid_type_error: '{VALUE} is not valid',
  }),
  dateOfBirth: z.string().optional(),
  email: z
    .string()
    .email('{VALUE} is not a valid email type')
    .nonempty('Student email is required'),
  contactNo: z.string().nonempty('Student contact no is required').trim(),
  emergencyContactNo: z
    .string()
    .nonempty('Student emergency contact no is required')
    .trim(),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z
    .string()
    .nonempty('Student present address is required')
    .trim(),
  permanentAddress: z
    .string()
    .nonempty('Student permanent address is required')
    .trim(),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  isDeleted: z.boolean(),
});

export default studentValidationSchema;
