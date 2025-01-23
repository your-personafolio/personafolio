
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
      </div>
    </MainContainer>
  );
};

export default Home;
