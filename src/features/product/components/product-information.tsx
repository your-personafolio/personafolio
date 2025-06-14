"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";

import CheckoutModal from "@/features/cart/components/cart-content/checkout-modal";
import { useState } from "react";
import Link from "next/link";

interface ProductInformation {
  title: string;
  category: string;
  price: string;
  discount: string;
  urlPreview: string;
}

const ProductInformation = ({
  title,
  category,
  price,
  discount,
  urlPreview,
}: ProductInformation) => {
  const [open, setOpen] = useState(false);

  const onOpenCheckoutModal = () => setOpen(true);
  const onCloseCheckoutModal = () => setOpen(false);
  return (
    <div>
      <CheckoutModal
        open={open}
        productNames={title}
        onClose={onCloseCheckoutModal}
        productPrices={discount}
      />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </h1>
      <div className="mt-3 flex items-center gap-2">
        <div className="text-2xl text-gray-900">
          <Currency value={price} style="discount" />
        </div>
        <div className="text-2xl text-gray-900">
          <Currency value={discount} style="non-discount" />
        </div>
      </div>
      <hr className="my-4" />
      <div className="space-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black dark:text-gray-700">
            Category:
          </h3>
          <div className="dark:text-gray-500">{category}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black dark:text-gray-700">
            Preview:
          </h3>
          <div className="font-bold text-light">
            <Link
              href={urlPreview}
              target="_blank"
              className="relative flex px-6 h-11 w-full items-center justify-center  before:absolute before:inset-0 before:rounded-full before:bg-personaPri before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <Image
                alt="icon-home"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1leWUiPjxwYXRoIGQ9Ik0yLjA2MiAxMi4zNDhhMSAxIDAgMCAxIDAtLjY5NiAxMC43NSAxMC43NSAwIDAgMSAxOS44NzYgMCAxIDEgMCAwIDEgMCAuNjk2IDEwLjc1IDEwLjc1IDAgMCAxLTE5Ljg3NiAwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyIvPjwvc3ZnPg=="
                width={24}
                height={24}
                className="me-2 relative"
              />
              <span className="relative text-base font-semibold text-light">
                Live Preview
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-6">
        <div
          className="cursor-pointer relative flex gap-2 px-6 h-11 w-full items-center justify-center  before:absolute before:inset-0 before:rounded-full before:bg-personaGray before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
          onClick={onOpenCheckoutModal}
        >
          <span className="relative text-base font-semibold text-light ">
            Isi Form dan Checkout
          </span>
          <ShoppingCart className="relative text-white" />
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
