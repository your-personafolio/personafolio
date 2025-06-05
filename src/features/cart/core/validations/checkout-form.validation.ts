import { z } from "zod";

export const checkoutFormSchema = z.object({
  fullName: z.string().min(3, "Nama lengkap harus diisi"),
  phone: z.string().min(10, "Nomor telepon tidak valid"),
  status: z.enum(["instagram", "website"]),
});

export type TCheckoutFormData = z.infer<typeof checkoutFormSchema>;
