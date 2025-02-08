import Home from "@/features/home/components";
import { getProducts } from "@/features/product/core/services/api";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({
    isFeatured: true,
  });

  return <Home products={products} />;
};

export default HomePage;
