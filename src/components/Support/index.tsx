import Link from "next/link";
import Image from "next/image";

export default function Support() {
  return (
    <>
      <section>
        <div className="py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80 dark:bg-gray-500 dark:bg-clip-padding dark:backdrop-filter  dark:backdrop-blur dark:bg-opacity-10 dark:backdrop-saturate-100 dark:backdrop-contrast-100">
              <div className="sm:h-[320px] sm:w-[400px] h-[200px] w-full relative overflow-hidden ">
                <Image
                  src="/persona-img-4.jpg"
                  loading="lazy"
                  fill
                  className="object-cover object-center"
                  alt="Photo by Andras Vas"
                />
              </div>

              <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5 items-start my-auto">
                <h2 className="mb-4 text-xl font-bold text-dark dark:text-light md:text-2xl lg:text-4xl">
                  Support center
                </h2>

                <p className="mb-8 max-w-md text-personaGray dark:text-neutral-400">
                  Apabila kamu mengalami kendala atau pertanyaan, jangan sungkan
                  untuk menanyakannya. Segera hubungi admin untuk informasi
                  lebih lanjut!
                </p>

                <Link
                  className="relative flex px-6 h-11 w-full items-center justify-center  before:absolute before:inset-0 before:rounded-full before:bg-personaPri before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                  href="https://wa.me/6285189296753?text=Halo,%20Persona Folio!"
                >
                  <span className="relative text-base font-semibold text-light">
                    Hubungi Admin!
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
