import { z } from "zod";

export const checkoutFormSchema = z.object({
  fullName: z.string().min(3, "Nama lengkap harus diisi"),
  phone: z.string().min(10, "Nomor telepon tidak valid"),
  address: z.string().min(5, "Alamat harus diisi"),
  status: z.enum(["student", "worker", "general"]),
  purpose: z.string().min(10, "Tujuan harus diisi"),
  institution: z.string().optional(), // ✅ Fix: Pastikan `institution` ada di skema
});

export type TCheckoutFormData = z.infer<typeof checkoutFormSchema>;
