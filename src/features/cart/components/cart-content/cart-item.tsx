import { X } from "lucide-react";
import Image from "next/image";

import type IProduct from "@/features/product/core/types";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/core/hooks/use-cart.hooks";
import Link from "next/link";

const CartItem = ({ data }: { data: IProduct }) => {
  const cart = useCart();

  const onRemoveProduct = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-6 border-b last:border-none">
      <div className="relative size-24 overflow-hidden rounded-md sm:size-48">
        <Image
          fill
          src={data.images[0].url}
          alt="Product image"
          className="object-cover object-center"
        />
      </div>
      <div className="relative flex flex-1 flex-col justify-between ml-4 sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full shadow-xl dark:shadow-md"
            onClick={onRemoveProduct}
          >
            <X size={15} />
          </Button>
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black dark:text-white">
              {data.name}
            </p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-light ml-4 font-bold border-l border-gray-200 pl-4">
              <Link
                href={data.size.name}
                target="_blank"
                className="btn bg-personaPri p-2 rounded-xl flex items-center"
              >
                <Image
                  alt="icon-home"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1leWUiPjxwYXRoIGQ9Ik0yLjA2MiAxMi4zNDhhMSAxIDAgMCAxIDAtLjY5NiAxMC43NSAxMC43NSAwIDAgMSAxOS44NzYgMCAxIDEgMCAwIDEgMCAuNjk2IDEwLjc1IDEwLjc1IDAgMCAxLTE5Ljg3NiAwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyIvPjwvc3ZnPg=="
                  width={24}
                  height={24}
                  className="me-2"
                />
                Preview
              </Link>
            </p>
          </div>
          <div className="block">
            <Currency value={data.price} style="discount" />
            <Currency value={data.priceWithDiscount} style="non-discount" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
