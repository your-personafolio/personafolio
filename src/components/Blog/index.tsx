import { ReactNode } from "react";

interface BlogProps {
  heading?: string;
  desc?: string;
  children?: ReactNode;
}
export default function Blog({ heading, desc, children }: BlogProps) {
  return (
    <>
      <section>
        <div className=" py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-dark dark:text-light md:mb-6 lg:text-3xl">
                Blog
              </h2>

              <p className="mx-auto max-w-screen-md text-center text-personaGray dark:text-neutral-400 md:text-lg">
                Selalu terhubung dan update berbagai informasi menarik dari
                Persona Folio.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
