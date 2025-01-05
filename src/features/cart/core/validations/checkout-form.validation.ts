import { z } from "zod";

const checkoutFormSchema = z.object({
  phone: z.string().min(1, "Phone is required."),
  address: z.string().min(1, "Address is required."),
});

export default checkoutFormSchema;
