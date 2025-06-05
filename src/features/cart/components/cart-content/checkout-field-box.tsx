import { Control, useController } from "react-hook-form";
import type { TCheckoutFormData } from "@/features/cart/core/types";

interface CheckoutFieldBoxProps {
  control?: Control<TCheckoutFormData>;
  type: string;
  name: keyof TCheckoutFormData;
  id: string;
  placeholder: string;
  label: string;
  isPending?: boolean;
  textarea?: boolean;
}

const CheckoutFieldBox = ({
  control,
  type,
  name,
  id,
  placeholder,
  label,
  isPending,
  textarea,
}: CheckoutFieldBoxProps) => {
  const { field } = useController({ name, control });

  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      {textarea ? (
        <textarea
          {...field}
          id={id}
          placeholder={placeholder}
          disabled={isPending}
          className="w-full border p-2 rounded-md"
        />
      ) : (
        <input
          {...field}
          type={type}
          id={id}
          placeholder={placeholder}
          disabled={isPending}
          className="w-full border p-2 rounded-md"
        />
      )}
    </div>
  );
};

export default CheckoutFieldBox;
