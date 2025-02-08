import MainContainer from "@/components/partials/containers/main-container";
import ProductList from "@/components/product-list";
import Image from "next/image";
import type IProduct from "@/features/product/core/types";

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
                <h1 className="text-gray-900 text-balance dark:text-light font-bold text-5xl md:text-6xl xl:text-7xl">
                  Show your persona
                  <br /> with{" "}
                  <span className="text-personaPri dark:text-light">
                    Persona Folio
                  </span>
                </h1>
                <p className="mt-8 text-gray-700 dark:text-gray-300">
                  Persona Folio adalah sebuah produk berupa website yang bisa
                  kamu gunakan untuk menggunggah portfolio dan profil dengan
                  pilihan tema website yang menarik.
                </p>
                <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                  <a
                    href="#"
                    className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-personaPri before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                  >
                    <span className="relative text-base font-semibold text-light dark:text-personaDark">
                      Get started
                    </span>
                  </a>
                  <a
                    href="#"
                    className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-personaPri/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                  >
                    <span className="relative text-base font-semibold text-personaPri dark:text-light">
                      Explore theme
                    </span>
                  </a>
                </div>

                {/* <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                  <div className="text-left">
                    <h6 className="text-lg font-semibold text-gray-700 dark:text-light">
                      The lowest price
                    </h6>
                    <p className="mt-2 text-gray-500">Some text here</p>
                  </div>
                  <div className="text-left">
                    <h6 className="text-lg font-semibold text-gray-700 dark:text-light">
                      The fastest on the market
                    </h6>
                    <p className="mt-2 text-gray-500">Some text here</p>
                  </div>
                  <div className="text-left">
                    <h6 className="text-lg font-semibold text-gray-700 dark:text-light">
                      The most loved
                    </h6>
                    <p className="mt-2 text-gray-500">Some text here</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" data={products ?? []} />
        </div>

        <section>
          <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
              <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-2 md:space-y-4">
                    <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                      Collaborative tools to design user experience
                    </h2>
                    <p className="text-gray-500 dark:text-neutral-500">
                      Use our tools to explore your ideas and make your vision
                      come true. Then share your work easily.
                    </p>
                  </div>

                  <ul className="mt-8 divide-y border-y *:py-3 *:flex *:items-center *:gap-3">
                    <li>
                      <Image
                        src={"/email.svg"}
                        alt="icon"
                        width={24}
                        height={24}
                      />
                      Email and web support
                    </li>
                    <li>
                      <Image
                        src={"/chat.svg"}
                        alt="icon"
                        width={24}
                        height={24}
                      />
                      Fast response time
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-12 justify-center gap-2 sm:gap-6 items-center lg:-translate-x-10">
                  <div className="col-span-6">
                    <img
                      className="rounded-xl"
                      src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
                      alt="Features Image"
                    />
                  </div>

                  <div className="col-span-6">
                    <img
                      className="rounded-xl"
                      src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
                      alt="Features Image"
                    />
                  </div>
                  <div className="absolute lg:bottom-20 -bottom-5 md:-start-1 -start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                    <span className="text-3xl font-medium mb-0">
                      <span className="counter-value font-bold">125</span>+
                    </span>
                    <h6 className="text-sm text-slate-400 mt-1">
                      Project Completed
                    </h6>
                  </div>
                  <div className="absolute md:top-72 lg:top-10 top-40 md:-end-1 -end-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                    <h6 className="font-semibold">Web Designer</h6>
                    <h6 className="text-sm text-slate-400 mt-1">
                      7+ Years Experience
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-neutral-900">
            <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
              <div className="max-w-3xl mb-10 lg:mb-14">
                <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                  Our
                </h2>
                <p className="mt-1 text-neutral-400">
                  This profound insight guides our comprehensive strategy — from
                  meticulous research and strategic planning to the seamless
                  execution of brand development and website or product
                  deployment.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
                <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                  <img
                    className="w-full object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Features Image"
                  />
                </div>

                <div>
                  <div className="mb-4">
                    <h3 className="text-[#ff0] text-xs font-medium uppercase">
                      Steps
                    </h3>
                  </div>

                  <div className="flex gap-x-5 ms-1">
                    <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                      <div className="relative z-10 size-8 flex justify-center items-center">
                        <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                          1
                        </span>
                      </div>
                    </div>

                    <div className="grow pt-0.5 pb-8 sm:pb-12">
                      <p className="text-sm lg:text-base text-neutral-400">
                        <span className="text-white">
                          Market Research and Analysis:
                        </span>
                        Identify your target audience and understand their
                        needs, preferences, and behaviors.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-x-5 ms-1">
                    <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                      <div className="relative z-10 size-8 flex justify-center items-center">
                        <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                          2
                        </span>
                      </div>
                    </div>

                    <div className="grow pt-0.5 pb-8 sm:pb-12">
                      <p className="text-sm lg:text-base text-neutral-400">
                        <span className="text-white">
                          Product Development and Testing:
                        </span>
                        Develop digital products or services that address the
                        needs and preferences of your target audience.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-x-5 ms-1">
                    <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                      <div className="relative z-10 size-8 flex justify-center items-center">
                        <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                          3
                        </span>
                      </div>
                    </div>

                    <div className="grow pt-0.5 pb-8 sm:pb-12">
                      <p className="text-sm md:text-base text-neutral-400">
                        <span className="text-white">
                          Marketing and Promotion:
                        </span>
                        Develop a comprehensive marketing strategy to promote
                        your digital products or services.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-x-5 ms-1">
                    <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                      <div className="relative z-10 size-8 flex justify-center items-center">
                        <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                          4
                        </span>
                      </div>
                    </div>

                    <div className="grow pt-0.5 pb-8 sm:pb-12">
                      <p className="text-sm md:text-base text-neutral-400">
                        <span className="text-white">
                          Launch and Optimization:
                        </span>
                        Launch your digital products or services to the market,
                        closely monitoring their performance and user feedback.
                      </p>
                    </div>
                  </div>

                  <a
                    className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
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
                    Schedule a call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-10 md:mb-16">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                  Frequently asked questions
                </h2>

                <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text but is random or otherwise generated.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-indigo-500 md:text-xl">
                    How does the product work?
                  </h3>
                  <p className="text-gray-500">
                    This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real
                    written text.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-indigo-500 md:text-xl">
                    What are the features?
                  </h3>
                  <p className="text-gray-500">
                    This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real
                    written text.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-indigo-500 md:text-xl">
                    What about integrations?
                  </h3>
                  <p className="text-gray-500">
                    This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real
                    written text.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-indigo-500 md:text-xl">
                    Is support available?
                  </h3>
                  <p className="text-gray-500">
                    This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real
                    written text.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-indigo-500 md:text-xl">
                    How does one upgrage a plan?
                  </h3>
                  <p className="text-gray-500">
                    This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real
                    written text.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-indigo-500 md:text-xl">
                    Which payment methods are available?
                  </h3>
                  <p className="text-gray-500">
                    This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real
                    written text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-10 md:mb-16">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                  Blog
                </h2>

                <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text but is random or otherwise generated.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                <a
                  href="#"
                  className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
                >
                  <img
                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

                  <div className="relative mt-auto p-4">
                    <span className="block text-sm text-gray-200">
                      July 19, 2021
                    </span>
                    <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                      New trends in Tech
                    </h2>

                    <span className="font-semibold text-indigo-300">
                      Read more
                    </span>
                  </div>
                </a>

                <a
                  href="#"
                  className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
                >
                  <img
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

                  <div className="relative mt-auto p-4">
                    <span className="block text-sm text-gray-200">
                      April 07, 2021
                    </span>
                    <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                      Working with legacy stacks
                    </h2>

                    <span className="font-semibold text-indigo-300">
                      Read more
                    </span>
                  </div>
                </a>

                <a
                  href="#"
                  className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
                >
                  <img
                    src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

                  <div className="relative mt-auto p-4">
                    <span className="block text-sm text-gray-200">
                      March 15, 2021
                    </span>
                    <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                      10 best smartphones for devs
                    </h2>

                    <span className="font-semibold text-indigo-300">
                      Read more
                    </span>
                  </div>
                </a>

                <a
                  href="#"
                  className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
                >
                  <img
                    src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

                  <div className="relative mt-auto p-4">
                    <span className="block text-sm text-gray-200">
                      January 27, 2021
                    </span>
                    <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                      8 High performance Notebooks
                    </h2>

                    <span className="font-semibold text-indigo-300">
                      Read more
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
                <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
                  <img
                    src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000"
                    loading="lazy"
                    alt="Photo by Andras Vas"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                  <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">
                    Help center
                  </h2>

                  <p className="mb-8 max-w-md text-gray-600">
                    This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real
                    written text.
                  </p>

                  <div className="mt-auto">
                    <a
                      href="#"
                      className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                    >
                      Contact support
                    </a>
                  </div>
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
