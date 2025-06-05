import * as React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import slugify from "slugify";

import MainContainer from "@/components/partials/containers/main-container";
import ProductInformation from "@/features/product/components/product-information";
import Gallery from "@/components/Gallery";

import { fetchHeader, fetchMetaHead, fetchProduct } from "@/lib/notion";
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const [header, metaHead, product] = await Promise.all([
    fetchHeader(),
    fetchMetaHead(),
    fetchProduct(),
  ]);

  const heading = product?.[0]?.title;
  const title = `${metaHead?.heading} - ${heading}` || "Persona Folio";
  const description = metaHead?.description || "";
  const keywords = metaHead?.keyword?.split(",") +
    [
      ,
      "persona",
      "folio",
      "personafolio",
      "portfolio",
      "blog",
      "website",
      "viodream",
      "forester",
      "deep-sky",
    ] || [
    "persona",
    "folio",
    "personafolio",
    "portfolio",
    "blog",
    "website",
    "viodream",
    "forester",
    "deep-sky",
  ];
  const author = metaHead?.author || "Persona Folio";
  const ogUrl = metaHead?.websiteUrl || "https://persona-viodream.vercel.app";
  const favicon = header?.logo[0].url || "/persona-logo.png";

  return {
    title,
    description,
    keywords,
    authors: [{ name: author }],
    openGraph: {
      title,
      description,
      url: ogUrl,
      siteName: author,
      type: "website",
    },
    icons: favicon
      ? {
          icon: [
            {
              url: favicon,
              type: "image/x-icon",
              sizes: "32x32",
            },
          ],
          apple: [
            {
              url: favicon,
              type: "image/x-icon",
              sizes: "32x32",
            },
          ],
        }
      : undefined,
    metadataBase: new URL(ogUrl),
    robots: {
      index: true,
      follow: true,
    },
  };
}

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
