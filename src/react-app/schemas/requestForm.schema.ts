import { z } from 'zod';

export const requestFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),

  phone: z
    .string()
    .regex(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      'Please enter a valid phone number (e.g., 555-123-4567)'
    ),

  email: z.string().email('Please enter a valid email address'),

  address: z
    .string()
    .min(5, 'Please enter a complete address')
    .max(200, 'Address is too long'),

  dumpsterSize: z
    .string()
    .refine(
      (val) => ['10', '20', '30', '40'].includes(val),
      'Please select a valid dumpster size'
    ),

  projectType: z
    .string()
    .min(3, 'Please describe your project type')
    .max(100, 'Project type description is too long'),

  deliveryDate: z
    .string()
    .min(1, 'Please select a delivery date')
    .refine(
      (date) => {
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selectedDate >= today;
      },
      'Delivery date must be today or in the future'
    ),

  notes: z.string().max(500, 'Notes are too long').optional(),
});

export type RequestFormData = z.infer<typeof requestFormSchema>;
