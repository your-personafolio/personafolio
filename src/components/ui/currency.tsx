import { formatPrice } from "@/core/utils";

interface CurrencyProps {
  value?: string | number;
  style: "discount" | "non-discount";
}

const Currency = ({ value, style = "non-discount" }: CurrencyProps) => {
  if (style === "discount") {
    return (
      <div className="font-semibold text-xs line-through text-red-400">
        {formatPrice(Number(value))}
      </div>
    );
  } else {
    return (
      <div className="font-semibold dark:text-gray-500">
        {formatPrice(Number(value))}
      </div>
    );
  }
};

export default Currency;
