import MainContainer from "@/components/partials/containers/main-container";
import Hero from "@/components/Hero";
import ProductList from "@/components/product-list";
import Promotion from "@/components/Promotion";
import HowOrder from "@/components/HowOrder";
import FAQ from "@/components/FAQ";
import Support from "@/components/Support";
import Blog from "@/components/Blog";
import BlogList from "@/components/Blog/BlogList";

import { fetchHero, fetchBlog, fetchProduct } from "@/lib/notion";
import ProductItem from "@/components/ui/product-item";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [hero, blog, products] = await Promise.all([
    fetchHero(),
    fetchBlog(),
    fetchProduct(),
  ]);
  // const products = await getProducts({
  //   isFeatured: true,
  // });

  console.log("data product", products);
  return (
    <>
      <MainContainer>
        <div className="space-y-10 pb-10">
          <Hero
            heading={hero?.heading || " "}
            specialtext={hero?.specialtext || " "}
            desc={hero?.desc || " "}
            br={hero?.br || " "}
            btn={hero?.button || "Let's Get Started"}
            url={hero?.btn_url || "/store"}
          />

          <div className="flex flex-col gap-y-8">
            <ProductList title="Feature Products">
              {products.map((product) => (
                <ProductItem
                  title={product?.title}
                  thumbnail={product?.thumbnail[0].url}
                  category={product?.category}
                  discount={product?.discount}
                  price={product?.price}
                  key={product.id}
                />
              ))}
            </ProductList>
          </div>

          <Promotion />
          <HowOrder />
          <FAQ />

          <Blog>
            {blog.map((item) => (
              <BlogList
                title={item?.title}
                thumbnail={item?.thumbnail[0].url}
                published={item?.published}
                key={item?.id}
              />
            ))}
          </Blog>
          <Support />
        </div>
      </MainContainer>
    </>
  );
}
