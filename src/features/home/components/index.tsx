import MainContainer from "@/components/partials/containers/main-container";
const Home = () => {
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
        {/* <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" data={products ?? []} />
        </div> */}

        <div className="md:7/12 lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Nuxt development is carried out by passionate developers
          </h2>

          <p className="my-8 text-gray-600 dark:text-gray-300">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
            expedita at? Asperiores nemo possimus nesciunt dicta veniam
            aspernatur quam mollitia. <br /> <br /> Vitae error, quaerat officia
            delectus voluptatibus explicabo quo pariatur impedit, at
            reprehenderit aliquam a ipsum quas voluptatem. Quo pariatur
            asperiores eum amet.
          </p>
          <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
            <div className="mt-8 flex gap-4 md:items-center">
              <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-5/6">
                <h3 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">
                  Chat Anytime
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Asperiores nemo possimus nesciunt quam mollitia.
                </p>
              </div>
            </div>
            <div className="pt-4 flex gap-4 md:items-center">
              <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-5/6">
                <h3 className="font-semibold text-lg text-gray-700 dark:text-teal-300">
                  Real Time Location
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Asperiores nemo possimus nesciunt quam mollitia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;
