"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import CheckoutFieldBox from "@/features/cart/components/cart-content/checkout-field-box";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import useCart from "@/core/hooks/use-cart.hooks";
import { toast } from "@/core/utils";

const checkoutFormSchema = z.object({
  fullName: z.string().min(3, "Nama lengkap harus diisi"),
  phone: z.string().min(10, "Nomor WA tidak valid"),
  address: z.string().min(5, "Asal daerah harus diisi"),
  status: z.enum(["student", "worker", "general"]),
  purpose: z.string().min(10, "Tujuan harus diisi"),
  institution: z.string().optional(),
  subdomain: z.string().optional(),
});

type TCheckoutFormData = z.infer<typeof checkoutFormSchema>;

interface ICheckoutModalProps {
  open: boolean;
  storeId: string;
  productIds: string[];
  productNames: string[];
  onClose: () => void;
}

const CheckoutModal = ({
  open,

  productNames = [],
  onClose,
}: ICheckoutModalProps) => {
  const [isPending, startTransition] = useTransition();
  const removeAllItems = useCart((state) => state.removeAll);
  const [subdomain, setSubdomain] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isEditing, setIsEditing] = useState(true);
  const [subdomainError, setSubdomainError] = useState("");

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { isValid },
  } = useForm<TCheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: JSON.parse(localStorage.getItem("checkoutForm") || "{}"),
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("checkoutForm") || "{}");
    if (savedData.subdomain) {
      setSubdomain(savedData.subdomain);
      setIsEditing(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("checkoutForm", JSON.stringify(getValues()));
  }, [getValues]);

  const checkSubdomain = async () => {
    if (!subdomain) {
      setSubdomainError("Masukkan subdomain!");
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
        setSubdomainError(`Subdomain ${subdomain}.personafolio.com tersedia!`);
      } else {
        setSubdomainError(
          `Subdomain ${subdomain}.personafolio.com tidak tersedia!`
        );
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
    startTransition(() => {
      const formattedProducts =
        productNames?.length > 0
          ? productNames.join(", ")
          : "Produk tidak tersedia";

      const message = `
*Checkout Order*
Nama: ${data.fullName}
No. WA: ${data.phone}
Asal daerah: ${data.address}
Status: ${
        data.status === "student"
          ? "Mahasiswa"
          : data.status === "worker"
          ? "Pekerja"
          : "Umum"
      }
Asal Instansi: ${data.institution || "-"}
Tujuan pembelian: ${data.purpose}
Produk: ${formattedProducts} ✅
Subdomain: ${data.subdomain + ".personafolio.com" || "Tidak ada"}

Mohon segera diproses. Terima kasih!`;

      const whatsappURL = `https://wa.me/625189296753?text=${encodeURIComponent(
        message
      )}`;
      window.location.href = whatsappURL;

      removeAllItems();
      toast.success("Checkout berhasil! Mengarahkan ke WhatsApp...");
    });
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
          {isEditing ? (
            <>
              <div className="flex items-center">
                <input
                  type="text"
                  value={subdomain}
                  onChange={(e) => setSubdomain(e.target.value)}
                  placeholder="Masukkan subdomain"
                  className="w-full p-2 border rounded-md me-2"
                />
                .personafolio.com
              </div>
              <button
                onClick={checkSubdomain}
                disabled={isChecking}
                className="mt-2 w-full bg-blue-500 text-white p-2 rounded-md"
              >
                {isChecking ? "Memeriksa..." : "Cek Ketersediaan Sub Domain"}
              </button>
              {subdomainError && (
                <p className="text-red-500 text-sm mt-1">{subdomainError}</p>
              )}
              {isAvailable && (
                <div>
                  <p className="text-green-500 text-sm mt-1">
                    {subdomain}.personafolio.com tersedia!
                  </p>

                  <button
                    onClick={selectSubdomain}
                    className="mt-2 w-full bg-green-500 text-white p-2 rounded-md"
                  >
                    Pilih Subdomain
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
            placeholder="(555) 555-1234"
            label="Nomor WA"
            isPending={isPending}
          />

          {/* ✅ Status (Mahasiswa/Pekerja/Umum) */}
          <div>
            <label className="block text-sm font-medium">Status</label>
            <select
              {...control.register("status")}
              className="w-full border p-2 rounded-md"
            >
              <option value="student">Mahasiswa</option>
              <option value="worker">Pekerja</option>
              <option value="general">Umum</option>
            </select>
          </div>

          <CheckoutFieldBox
            control={control}
            type="text"
            name="institution"
            id="institution"
            placeholder="Nama instansi (opsional)"
            label="Asal Instansi"
            isPending={isPending}
          />
          <CheckoutFieldBox
            control={control}
            type="text"
            name="address"
            id="address"
            placeholder="misal: Yogyakarta"
            label="Asal daerah"
            isPending={isPending}
          />
          <CheckoutFieldBox
            control={control}
            type="textarea" // Menggunakan textarea jika CheckoutFieldBox mendukungnya
            name="purpose"
            id="purpose"
            placeholder="Tujuan pembelian...(minimal 10 karakter)"
            label="Tujuan"
            isPending={isPending}
            textarea
          />

          <Button type="submit" disabled={!isValid || isPending}>
            Checkout
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default CheckoutModal;
