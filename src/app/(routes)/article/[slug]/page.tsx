import { notFound } from "next/navigation";
import slugify from "slugify";
import Image from "next/image";
import getLocalizedDate from "@/lib/getLocalizeData";
import ClientRenderer from "./ClientRenderer";
import { Metadata } from "next";
import { NotionAPI } from "notion-client";

import { fetchBlog, fetchHeader, fetchMetaHead } from "@/lib/notion";
import MainContainer from "@/components/partials/containers/main-container";

export const dynamic = "force-dynamic";
export async function generateMetadata(): Promise<Metadata> {
  const [header, metaHead, blog] = await Promise.all([
    fetchHeader(),
    fetchMetaHead(),
    fetchBlog(),
  ]);

  const heading = blog?.[0]?.title;
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

export default async function ArticleDetail({ params }: any) {
  const slug = params.slug;

  const blogs = await fetchBlog();

  const blog = blogs.find((b) => slugify(b.title).toLowerCase() === slug);

  if (!blog) return notFound();

  const blocks = await fetch(
    `https://notion-api.splitbee.io/v1/page/${blog.id}`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  const notion = new NotionAPI();

  const notionPage = await notion.getPage(`${blog.id}`);

  if (
    !blocks ||
    typeof blocks !== "object" ||
    Object.keys(blocks).length === 0
  ) {
    return notFound();
  }

  const firstBlockKey = Object.keys(blocks)[0];
  const firstBlock = blocks[firstBlockKey];

  const lastEdited = firstBlock?.value?.last_edited_time;
  const lastEditedISO = lastEdited ? new Date(lastEdited).toISOString() : null;

  const publishedOn = getLocalizedDate(blog.published);
  const modifiedDate = getLocalizedDate(lastEditedISO || "");

  return (
    <>
      <MainContainer>
        <section>
          <div className="mx-auto">
            <div className="text-center ">
              <div className="sm:px-4 md:px-0">
                {blog.thumbnail?.[0]?.url && (
                  <div className="group relative m-auto h-48 w-full md:w-3/4 overflow-hidden rounded-lg shadow-lg md:h-64 xl:h-96 mt-10">
                    <Image
                      src={blog.thumbnail[0].url}
                      blurDataURL={blog.thumbnail[0].url}
                      fill
                      placeholder="blur"
                      alt="article thumbnail"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 "
                    />
                  </div>
                )}
              </div>
              <div className=" py-4">
                <h1 className="font-bold text-3xl lg:text-4xl text-dark dark:text-light">
                  {blog.title}
                </h1>

                <div className="">
                  {publishedOn}
                  <br />
                  {publishedOn !== modifiedDate && (
                    <>
                      <span className="">•</span>
                      <span className="font-bold">Terakhir diupdate</span>{" "}
                      <span> {modifiedDate}</span>
                    </>
                  )}
                </div>
              </div>
              <hr className="border border-1"></hr>
            </div>

            <div className="">
              <ClientRenderer blocks={notionPage} />
            </div>
          </div>
        </section>
      </MainContainer>
    </>
  );
}

export async function generateStaticParams() {
  const blogs = await fetchBlog();

  return blogs.map((b) => ({
    slug: slugify(b.title).toLowerCase(),
  }));
}
