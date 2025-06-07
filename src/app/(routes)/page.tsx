import { Metadata } from "next";
import MainContainer from "@/components/partials/containers/main-container";
import Hero from "@/components/Hero";
import ProductList from "@/components/product-list";
import Promotion from "@/components/Promotion";
import HowOrder from "@/components/HowOrder";
import FAQ from "@/components/FAQ";
import Support from "@/components/Support";
import Blog from "@/components/Blog";
import BlogList from "@/components/Blog/BlogList";
import ProductItem from "@/components/ui/product-item";

import {
  fetchHero,
  fetchBlog,
  fetchProduct,
  fetchHeader,
  fetchMetaHead,
  fetchBanner,
} from "@/lib/notion";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const [header, metaHead] = await Promise.all([
    fetchHeader(),
    fetchMetaHead(),
  ]);

  const title = metaHead?.heading || "Persona Folio";
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

export default async function HomePage() {
  const [hero, blog, products, banner, header] = await Promise.all([
    fetchHero(),
    fetchBlog(),
    fetchProduct(),
    fetchBanner(),
    fetchHeader(),
  ]);

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
            bannerTitle={banner?.title || " "}
            bannerDesc={banner?.description || " "}
            bannerUrl={banner?.url || " "}
          />

          <div className="flex flex-col gap-y-8">
            <ProductList title="Feature Products">
              {products.map((product) => (
                <ProductItem
                  title={product?.title || " "}
                  thumbnail={product?.thumbnail[0].url || " "}
                  category={product?.category || " "}
                  discount={product?.discount || " "}
                  price={product?.price || " "}
                  urlPreview={product?.urlPreview || " "}
                  key={product.id}
                />
              ))}
            </ProductList>
          </div>

          <Promotion />
          <HowOrder urlEmbed={header?.embedYoutube || " "} />
          <FAQ />

          <Blog>
            {blog.map((item) => (
              <BlogList
                title={item?.title || " "}
                thumbnail={item?.thumbnail[0].url || " "}
                published={item?.published || " "}
                key={item?.id || " "}
              />
            ))}
          </Blog>
          <Support />
        </div>
      </MainContainer>
    </>
  );
}
