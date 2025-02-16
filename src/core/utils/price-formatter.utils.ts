const priceFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0, // Menghilangkan desimal
  maximumFractionDigits: 0, // Memastikan tidak ada desimal
});

const formatPrice = (value: number) => {
  return priceFormatter.format(value).trim() + ",-";
};
export default formatPrice;
