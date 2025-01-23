import getBillboards from "@/features/billboards/core/services/api";
import Store from "@/features/store/components";
import { getProducts } from "@/features/product/core/services/api";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({
    isFeatured: true,
  });
  const billboard = await getBillboards();

  return <Store billboard={billboard?.[0]} products={products} />;
};

export default HomePage;
