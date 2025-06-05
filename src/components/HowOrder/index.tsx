import YouTubeEmbed from "../YoutubeEmbed";

export default function HowOrder() {
  return (
    <>
      {/* Cara bayar */}
      <section>
        <div className="bg-neutral-900 rounded-xl dark:bg-gray-500 dark:bg-clip-padding dark:backdrop-filter  dark:backdrop-blur dark:bg-opacity-10 dark:backdrop-saturate-100 dark:backdrop-contrast-100">
          <div className="max-w-5xl px-4 xl:px-0 py-5 lg:pb-20 mx-auto">
            <div className="grid md:relative grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="block md:absolute md:bottom-[200px] md:left-[90px] z-10">
                <YouTubeEmbed className="w-full h-[200px] rounded-lg" />
              </div>
              <div className="relative m-auto aspect-w-16 aspect-h-9 lg:aspect-none hidden md:block">
                <div className="absolute lg:bottom-20 bottom-5 md:-start-1 -start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-auto text-center">
                  <span className="text-3xl font-medium mb-0">
                    <span className="counter-value font-bold">Simple</span>
                  </span>
                  <h6 className="text-sm text-slate-400 mt-1">
                    Checkout dengan mudah
                  </h6>
                </div>
                <img
                  className="max-w-[400px] object-cover rounded-xl"
                  src="/persona-img-3.png"
                  alt="Features Image"
                />
              </div>

              <div>
                <div className="mb-4">
                  <h2 className="text-light font-semibold text-2xl md:text-4xl md:leading-tight">
                    Cara pemesanan website
                  </h2>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-gray-400 text-personaSec font-semibold text-xs uppercase rounded-full">
                        1
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                      <span className="text-light">
                        Pilih tema website yang kamu sukai dan masukkan
                        keranjang!
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-gray-400 text-personaSec font-semibold text-xs uppercase rounded-full">
                        2
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-dark dark:text-neutral-400">
                      <span className="text-light">Pergi ke halaman Cart!</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-gray-400 text-personaSec font-semibold text-xs uppercase rounded-full">
                        3
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                      <span className="text-light">
                        Pilih nama untuk website kamu dan checkout -{" "}
                      </span>
                      Setelah mengisi form dan klik checkout, kamu akan
                      diarahkan ke wa admin untuk melakukan pembayaran.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-gray-400 text-personaSec font-semibold text-xs uppercase rounded-full">
                        4
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-dark dark:text-neutral-400">
                      <span className="text-light">
                        Bayar dan kirim bukti pembayaran ke wa admin. Website
                        akan segera diproses
                      </span>
                    </p>
                  </div>
                </div>

                <a
                  className="group inline-flex items-center gap-x-2 py-2 px-3 bg-personaPri font-medium text-sm text-light rounded-full focus:outline-none"
                  href="https://wa.me/6285189296753?text=Halo,%20Persona Folio!"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                      d="M14.05 2a9 9 0 0 1 8 7.94"
                    ></path>
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                      d="M14.05 6A5 5 0 0 1 18 10"
                    ></path>
                  </svg>
                  Tanya Admin terkait pembayaran
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
