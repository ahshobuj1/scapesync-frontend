import {z} from 'zod';

export const registerSchema = z
  .object({
    first_name: z.string().min(2, 'First name is required'),
    last_name: z.string().min(2, 'Last name is required'),
    email: z.string().email('Enter a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    password_confirmation: z.string().min(6, 'Confirm your password'),
    terms: z.boolean().optional(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export const loginSchema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  terms: z.boolean().optional(),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email('Enter a valid email'),
});

export const resetPasswordSchema = z.object({
  password: z.string().min(6, 'Password must be at least 6 characters'),
  password_confirmation: z.string().min(6, 'Confirm your password'),
});
