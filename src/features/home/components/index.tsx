import MainContainer from "@/components/partials/containers/main-container";
import ProductList from "@/components/product-list";
import Image from "next/image";
import type IProduct from "@/features/product/core/types";
import Link from "next/link";

interface IHomeProps {
  products?: IProduct[];
}
const Home = ({ products }: IHomeProps) => {
  return (
    <MainContainer>
      <div className="space-y-10 pb-10">
        <div className="relative" id="home">
          <div
            aria-hidden="true"
            className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-50"
          >
            <div className="blur-[106px] h-52 bg-gradient-to-r from-personaPurple to-personaPri"></div>
            <div className="blur-[106px] h-56 bg-gradient-to-br from-personaSec to-personaBlue"></div>
          </div>

          <div className="ini perlu di ubah">
            <div className="relative pt-36 ml-auto">
              <div className="lg:w-2/3 text-center mx-auto">
                <h1 className="text-personaGray text-balance dark:text-light font-bold text-5xl md:text-6xl xl:text-7xl">
                  Show your persona
                  <br /> with{" "}
                  <span className="text-personaPri dark:text-light">
                    Persona Folio
                  </span>
                </h1>
                <p className="mt-8 text-neutral-400 dark:text-light">
                  Persona Folio adalah sebuah produk berupa website yang bisa
                  kamu gunakan untuk menggunggah portfolio dan profil dengan
                  pilihan tema website yang menarik.
                </p>
                <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                  <a
                    href="/store"
                    className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-personaPri before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                  >
                    <span className="relative text-base font-semibold text-light dark:text-personaDark">
                      Let&apos;s Get Started
                    </span>
                  </a>
                  {/* <a
                    href="#"
                    className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-personaPri/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                  >
                    <span className="relative text-base font-semibold text-personaPri dark:text-light">
                      
                    </span>
                  </a> */}
                </div>

                <div className="max-w-5xl px-4 xl:px-0 py-4 mx-auto">
                  <div className="rounded-xl">
                    <div className="p-4 lg:p-8  rounded-xl">
                      <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-4 gap-x-12">
                        <div className="relative text-center before:mt-3.5 sm:before:mt-0">
                          <div className="mt-3 sm:mt-5">
                            <h3 className="text-lg font-semibold text-personaGray dark:text-light">
                              Harga mulai 100 ribuan
                            </h3>
                            <p className="mt-1 text-sm sm:text-base text-neutral-400">
                              harga terjangkau, ramah kantong
                            </p>
                          </div>
                        </div>

                        <div className="relative text-center before:mt-3.5 sm:before:mt-0">
                          <div className="mt-3 sm:mt-5">
                            <h3 className="text-lg font-semibold text-personaGray dark:text-light">
                              Gratis domain .personafolio.com
                            </h3>
                            <p className="mt-1 text-sm sm:text-base text-neutral-400">
                              bebas pakai domain yang tersedia
                            </p>
                          </div>
                        </div>

                        <div className="relative text-center before:mt-3.5 sm:before:mt-0">
                          <div className="mt-3 sm:mt-5">
                            <h3 className="text-lg font-semibold text-personaGray dark:text-light">
                              24/7
                            </h3>
                            <p className="mt-1 text-sm sm:text-base text-neutral-400">
                              Persona Folio siap melayani 24/7
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-8">
          <ProductList title="Featured Products" data={products ?? []} />
        </div>

        {/* Alasan memilih Personafolio */}
        <section>
          <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-12 lg:gap-16 items-center">
              <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-2 md:space-y-4">
                    <h2 className="font-bold text-3xl lg:text-4xl text-personaGray dark:text-light">
                      Waktunya upgrade portfolio kalian dari PPT atau PDF ke
                      Website!
                    </h2>
                  </div>

                  <ul className="mt-8 divide-y border-y *:py-3 *:flex *:items-center *:gap-3 text-neutral-400">
                    <li>
                      <Image
                        src={
                          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBhaW50YnJ1c2gtdmVydGljYWwiPjxwYXRoIGQ9Ik0xMCAydjIiLz48cGF0aCBkPSJNMTQgMnY0Ii8+PHBhdGggZD0iTTE3IDJhMSAxIDAgMCAxIDEgMXY5SDZWM2ExIDEgMCAwIDEgMS0xeiIvPjxwYXRoIGQ9Ik02IDEyYTEgMSAwIDAgMC0xIDF2MWEyIDIgMCAwIDAgMiAyaDJhMSAxIDAgMCAxIDEgMXYyLjlhMiAyIDAgMSAwIDQgMFYxN2ExIDEgMCAwIDEgMS0xaDJhMiAyIDAgMCAwIDItMnYtMWExIDEgMCAwIDAtMS0xIi8+PC9zdmc+"
                        }
                        alt="icon"
                        width={24}
                        height={24}
                      />
                      Berbagai pilihan tema menarik
                    </li>
                    <li>
                      <Image
                        src={
                          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItcm91bmQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNSIvPjxwYXRoIGQ9Ik0yMCAyMWE4IDggMCAwIDAtMTYgMCIvPjwvc3ZnPg=="
                        }
                        alt="icon"
                        width={24}
                        height={24}
                      />
                      Bebas edit konten semaumu
                    </li>
                    <li>
                      <Image
                        src={
                          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRpY2tldC1jaGVjayI+PHBhdGggZD0iTTIgOWEzIDMgMCAwIDEgMCA2djJhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi0yYTMgMyAwIDAgMSAwLTZWN2EyIDIgMCAwIDAtMi0ySDRhMiAyIDAgMCAwLTIgMloiLz48cGF0aCBkPSJtOSAxMiAyIDIgNC00Ii8+PC9zdmc+"
                        }
                        alt="icon"
                        width={24}
                        height={24}
                      />
                      Sekali bayar tanpa perlu langganan
                    </li>
                    <li>
                      <Image
                        src={"/chat.svg"}
                        alt="icon"
                        width={24}
                        height={24}
                      />
                      Admin fast response
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative grid grid-cols-12 justify-center gap-2 sm:gap-6 items-center lg:-translate-x-10">
                  <div className="col-span-6">
                    <img src="/persona-img-1.png" alt="Features Image" />
                  </div>

                  <div className="col-span-6">
                    <img src="/persona-img-2.png" alt="Features Image" />
                  </div>
                  <div className="absolute lg:bottom-20 -bottom-5 md:-start-1 -start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-auto text-center">
                    <span className="text-3xl font-medium mb-0">
                      <span className="counter-value font-bold">100</span>+
                    </span>
                    <h6 className="text-sm text-slate-400 mt-1">
                      Project Completed
                    </h6>
                  </div>
                  <div className="absolute md:top-72 lg:top-10 top-40 md:-end-1 -end-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-auto text-center">
                    <h6 className="font-semibold">Web Developer</h6>
                    <h6 className="text-sm text-slate-400 mt-1">
                      5+ Years Experience
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cara bayar */}
        <section>
          <div className="bg-neutral-900 rounded-xl dark:bg-gray-500 dark:bg-clip-padding dark:backdrop-filter  dark:backdrop-blur dark:bg-opacity-10 dark:backdrop-saturate-100 dark:backdrop-contrast-100">
            <div className="max-w-5xl px-4 xl:px-0 py-5 lg:pb-20 mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-16 items-center">
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
                      <p className="text-sm lg:text-base text-neutral-400">
                        <span className="text-light">
                          Pergi ke halaman Cart!
                        </span>
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
                      <p className="text-sm md:text-base text-neutral-400">
                        <span className="text-light">
                          Bayar dan kirim bukti pembayaran ke wa admin. Website
                          akan segera diproses
                        </span>
                      </p>
                    </div>
                  </div>

                  <a
                    className="group inline-flex items-center gap-x-2 py-2 px-3 bg-personaPri font-medium text-sm text-light rounded-full focus:outline-none"
                    href="#"
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

        <section>
          <div className=" py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-10 md:mb-16">
                <h2 className="mb-4 text-center text-2xl font-bold text-personaGray dark:text-light md:mb-6 lg:text-3xl">
                  Frequently asked questions
                </h2>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-personaSec md:text-xl">
                    Apakah perlu membayar langganan website perbulan/tahun?
                  </h3>
                  <p className="text-neutral-400">
                    Tidak, cukup sekali bayar dan kamu bisa memiliki website
                    tanpa perlu biaya langganan.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-personaSec md:text-xl">
                    Apakah bisa menggunakan domain sendiri?
                  </h3>
                  <p className="text-neutral-400">
                    Bisa, seandainya kamu memiliki domain sendiri dan ingin
                    diintegrasikan dengan personafolio bisa, tapi akan dikenakan
                    biaya tambahan.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-personaSec md:text-xl">
                    Siapa yang cocok menggunakan layanan ini?
                  </h3>
                  <p className="text-neutral-400">
                    Mahasiswa yang ingin menampilkan portofolio tugas, proyek,
                    magang, atau prestasi akademik. Pekerja yang ingin
                    memperkuat personal branding dan menampilkan pengalaman
                    kerja. Dan kamu yang membutuhkan website profesional untuk
                    menarik klien.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-personaSec md:text-xl">
                    Berapa lama waktu pengerjaan website?
                  </h3>
                  <p className="text-neutral-400">
                    Tidak butuh waktu yang lama, cukup menunggu waktu maksimal{" "}
                    <strong>30 menit</strong>.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-personaSec md:text-xl">
                    Apakah saya bisa menambahkan fitur khusus?
                  </h3>
                  <p className="text-neutral-400">
                    Tidak untuk saat ini. Persona Folio hanya menyediakan
                    website sesuai dengan tema yang sudah tersedia dan kamu bisa
                    megedit isinya.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-personaSec md:text-xl">
                    Bagaimana sistem pembayarannya?
                  </h3>
                  <p className="text-neutral-400">
                    Setelah kamu mengisi form dan klik chekout, akan diarahkan
                    ke wa admin untuk melakukan pembayaran. Pembayaran bisa
                    melalui transfer bank atau melalui Gopay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog */}
        <section>
          <div className=" py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-10 md:mb-16">
                <h2 className="mb-4 text-center text-2xl font-bold text-personaGray dark:text-light md:mb-6 lg:text-3xl">
                  Blog
                </h2>

                <p className="mx-auto max-w-screen-md text-center text-neutral-400 md:text-lg">
                  Selalu terhubung dan update berbagai informasi menarik dari
                  Persona Folio.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                <a
                  href="/blog/selamat-datang-di-persona-folio"
                  className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
                >
                  <img
                    src="/banner-min.png"
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

                  <div className="relative mt-auto p-4">
                    <span className="block text-sm text-neutral-400">
                      Feb 15, 2025
                    </span>
                    <h2 className="mb-2 text-xl font-semibold text-light transition duration-100">
                      Selamat Datang di Persona Folio
                    </h2>

                    <span className="font-semibold text-personaSec">
                      Read more
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80 dark:bg-gray-500 dark:bg-clip-padding dark:backdrop-filter  dark:backdrop-blur dark:bg-opacity-10 dark:backdrop-saturate-100 dark:backdrop-contrast-100">
                <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
                  <img
                    src="/persona-img-4.jpg"
                    loading="lazy"
                    alt="Photo by Andras Vas"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5 items-start my-auto">
                  <h2 className="mb-4 text-xl font-bold text-dark dark:text-light md:text-2xl lg:text-4xl">
                    Support center
                  </h2>

                  <p className="mb-8 max-w-md text-neutral-400">
                    Apabila kamu mengalami kendala atau pertanyaan, jangan
                    sungkan untuk menanyakannya. Segera hubungi admin untuk
                    informasi lebih lanjut!
                  </p>

                  <Link
                    className=" rounded-lg bg-personaPri px-2  py-3 text-center text-sm font-semibold text-light outline-none ring-indigo-300 md:text-base"
                    href="https://wa.me/6285189296753?text=Halo,%20Persona Folio!"
                  >
                    Hubungi kami!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainContainer>
  );
};

export default Home;
