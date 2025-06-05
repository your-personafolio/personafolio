import * as React from "react";

import slugify from "slugify";
import { notFound } from "next/navigation";

import MainContainer from "@/components/partials/containers/main-container";
import { fetchProduct } from "@/lib/notion";
import ProductInformation from "@/features/product/components/product-information";

import Gallery from "@/components/Gallery";

export default async function ProductDetail({ params }: any) {
  const [products] = await Promise.all([fetchProduct()]);

  const slug = params?.slug;

  const product = products.find((b) => slugify(b.title).toLowerCase() === slug);
  if (!product) return notFound();

  return (
    <>
      {/* <Product product={productInfo} suggestedProducts={suggestedProducts} /> */}

      <MainContainer>
        <div className="px-4 py-10 sm:-x-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery
              items={product.thumbnail.map((image: any, index: number) => ({
                thumbnail: image.url,
              }))}
            />

            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <ProductInformation
                title={product.title}
                category={product.category}
                price={product.price}
                discount={product.discount}
                urlPreview={product.urlPreview}
              />
            </div>
          </div>
          <hr className="my-10" />
          {/* <ProductList title="Related Items" data={suggestedProducts ?? []} /> */}
        </div>
      </MainContainer>
    </>
  );
}
