"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import CheckoutFieldBox from "@/features/cart/components/cart-content/checkout-field-box";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { formatPrice, toast } from "@/core/utils";

const checkoutFormSchema = z.object({
  fullName: z.string().min(3, "Nama lengkap harus diisi"),
  phone: z.string().min(10, "Nomor WA tidak valid"),
  status: z.enum(["instagram", "website"]),
  subdomain: z.string().optional(),
});

type TCheckoutFormData = z.infer<typeof checkoutFormSchema>;

interface ICheckoutModalProps {
  open: boolean;
  productPrices: any;
  productNames: any;
  onClose: () => void;
}

const CheckoutModal = ({
  open,

  productNames = [],
  productPrices = [],
  onClose,
}: ICheckoutModalProps) => {
  const [isPending, startTransition] = useTransition();

  const [subdomain, setSubdomain] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isEditing, setIsEditing] = useState(true);
  const [subdomainError, setSubdomainError] = useState("");

  const [defaultValues, setDefaultValues] = useState<TCheckoutFormData>({
    fullName: "",
    phone: "",
    status: "instagram",
    subdomain: "",
  });

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { isValid },
  } = useForm<TCheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues,
  });

  useEffect(() => {
    // Ambil data dari localStorage terlebih dahulu
    const savedData = JSON.parse(localStorage.getItem("checkoutForm") || "{}");

    setDefaultValues({
      fullName: savedData.fullName || "",
      phone: savedData.phone || "",
      status: savedData.status || "instagram",
      subdomain: savedData.subdomain || "",
    });

    if (savedData.subdomain) {
      setSubdomain(savedData.subdomain);
      setIsEditing(false);
    }
  }, []);

  const checkSubdomain = async () => {
    if (!subdomain) {
      setSubdomainError("Masukkan nama domain website!");
      return;
    }

    setIsChecking(true);
    setSubdomainError("");
    try {
      const res = await fetch("/api/check-subdomain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subdomain }),
      });

      const data = await res.json();
      setIsAvailable(data.available);

      if (data.available) {
        `${subdomain}.personafolio.com tersedia!`;
      } else {
        setSubdomainError(` ${subdomain}.personafolio.com tidak tersedia!`);
      }
    } finally {
      setIsChecking(false);
    }
  };

  const selectSubdomain = () => {
    if (isAvailable) {
      setValue("subdomain", subdomain);
      localStorage.setItem("checkoutForm", JSON.stringify(getValues()));
      setIsEditing(false);
      toast.success(`Subdomain ${subdomain}.personafolio.com dipilih!`);
    }
  };

  const editSubdomain = () => {
    setIsEditing(true);
  };

  const onSubmit = (data: TCheckoutFormData) => {
    const message = `
*Checkout Order*
Produk: ${productNames}
Subdomain: ${data.subdomain + ".personafolio.com" || "Tidak ada"}
Harga: ${formatPrice(Number(productPrices))}
Nama: ${data.fullName}
No. WA: ${data.phone}
Tahu informasi dari: ${
      data.status === "instagram"
        ? "Instagram"
        : data.status === "website"
        ? "Website"
        : ""
    }
Mohon segera diproses. Terima kasih!`;

    const waUrl = `https://wa.me/6285189296753?text=${encodeURIComponent(
      message
    )}`;

    // Hapus localStorage dulu
    localStorage.removeItem("checkoutForm");

    // Tampilkan toast
    toast.success("Checkout berhasil! Anda akan diarahkan ke beranda...");

    setTimeout(() => {
      // Buka WhatsApp di tab baru
      window.open(
        `https://wa.me/6285189296753?text=${encodeURIComponent(message)}`,
        "_blank"
      );

      // Redirect halaman utama
      window.location.href = "/";
    }, 2000);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      classes={{ dialogPanel: "max-w-2xl", container: "!pt-0" }}
    >
      <div className="size-full">
        <h2 className="text-2xl font-bold">Checkout</h2>
        <div className="my-4">
          <span className="text-personaPri text-sm block">
            Pastikan untuk isi semua form di bawah agar bisa melakukan checkout!
          </span>
          Masukkan nama domain website
          {isEditing ? (
            <>
              <div className="flex items-center">
                <input
                  type="text"
                  value={subdomain}
                  onChange={(e) => setSubdomain(e.target.value)}
                  placeholder="Masukkan nama domain website"
                  className="w-full p-2 border rounded-md me-2"
                  required
                />
                .personafolio.com
              </div>
              <button
                onClick={checkSubdomain}
                disabled={isChecking}
                className="mt-2 text-light relative flex gap-2 px-6 h-11 w-full items-center justify-center  before:absolute before:inset-0 before:rounded-full before:bg-personaSec before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
              >
                <span className="relative text-base font-semibold text-light ">
                  {isChecking ? "Memeriksa..." : "Cek Ketersediaan"}
                </span>
              </button>
              {subdomainError && (
                <p className="text-red-500 font-bold text-sm mt-1">
                  {subdomainError}
                </p>
              )}
              {isAvailable && (
                <div>
                  <p className="text-personaPri text-sm mt-1 font-bold">
                    {subdomain}.personafolio.com tersedia!
                  </p>

                  <button
                    onClick={selectSubdomain}
                    className="mt-2 text-light relative flex gap-2 px-6 h-11 w-full items-center justify-center  before:absolute before:inset-0 before:rounded-full before:bg-personaPri before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                  >
                    <span className="relative text-base font-semibold text-light ">
                      Pilih Nama Domain Website
                    </span>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
              <span>{subdomain}.personafolio.com</span>
              <button
                onClick={editSubdomain}
                className="text-blue-500 underline"
              >
                Edit
              </button>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CheckoutFieldBox
            control={control}
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Nama Lengkap"
            label="Nama Lengkap"
            isPending={isPending}
          />
          <CheckoutFieldBox
            control={control}
            type="number"
            name="phone"
            id="phone"
            placeholder="081234567890"
            label="Nomor WA"
            isPending={isPending}
          />

          {/* ✅ Status (Mahasiswa/Pekerja/Umum) */}
          <div className="mb-2">
            <label className="block text-sm font-medium">
              Tahu informasi dari?
            </label>
            <select
              {...control.register("status")}
              className="w-full border p-2 rounded-md"
            >
              <option value="instagram">Instagram</option>
              <option value="website">Website</option>
            </select>
          </div>

          <Button
            type="submit"
            disabled={!isValid || isPending}
            className="mt-2 rounded-full relative flex gap-2 px-6 h-11 w-full items-center"
          >
            <span className="relative text-base font-semibold text-light">
              Checkout
            </span>
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default CheckoutModal;
