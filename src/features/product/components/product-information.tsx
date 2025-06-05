"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";

import type IProduct from "@/features/product/core/types";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/core/hooks/use-cart.hooks";
import CheckoutModal from "@/features/cart/components/cart-content/checkout-modal";
import { useState } from "react";

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
            <a
              href={urlPreview}
              target="_blank"
              className="btn bg-personaPri p-2 rounded-xl flex items-center "
            >
              <Image
                alt="icon-home"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1leWUiPjxwYXRoIGQ9Ik0yLjA2MiAxMi4zNDhhMSAxIDAgMCAxIDAtLjY5NiAxMC43NSAxMC43NSAwIDAgMSAxOS44NzYgMCAxIDEgMCAwIDEgMCAuNjk2IDEwLjc1IDEwLjc1IDAgMCAxLTE5Ljg3NiAwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyIvPjwvc3ZnPg=="
                width={24}
                height={24}
                className="me-2"
              />
              Live Preview
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-6">
        <Button
          className="flex items-center gap-x-2 rounded-full dark:bg-zinc-800 hover:dark:bg-zinc-900 dark:text-white dark:border-zinc-950"
          onClick={onOpenCheckoutModal}
        >
          Isi Form dan Checkout <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default ProductInformation;
