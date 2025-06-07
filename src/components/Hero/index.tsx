import Link from "next/link";
import Banner from "@/components/ui/banner";

interface HeroProps {
  heading: string;
  specialtext: string;
  desc: string;
  br: string;
  btn: string;
  url: string;
  bannerTitle: string;
  bannerDesc: string;
  bannerUrl: string;
}

export default function Hero(props: HeroProps) {
  const {
    heading,
    specialtext,
    desc,
    br,
    btn,
    url,
    bannerDesc,
    bannerTitle,
    bannerUrl,
  } = props;
  return (
    <>
      <div className="relative" id="home">
        <div className="ini perlu di ubah">
          <div className="relative pt-36 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <Banner title={bannerTitle} desc={bannerDesc} url={bannerUrl} />
              <h1 className="text-personaGray text-balance dark:text-light font-bold text-5xl md:text-6xl xl:text-7xl">
                {heading}
                <br /> {br}{" "}
                <span className="text-personaPri dark:text-light">
                  {specialtext}
                </span>
              </h1>
              <p className="mt-8 text-dark dark:text-neutral-400">{desc}</p>
              <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                <Link
                  href={url}
                  className="relative flex px-6 h-11 w-full items-center justify-center  before:absolute before:inset-0 before:rounded-full before:bg-personaPri before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-light">
                    {btn}
                  </span>
                </Link>
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
                          <h3 className="text-lg font-semibold text-dark dark:text-light">
                            Harga mulai 100 ribuan
                          </h3>
                          <p className="mt-1 text-sm sm:text-base text-personaGray dark:text-neutral-400">
                            harga terjangkau, ramah kantong
                          </p>
                        </div>
                      </div>

                      <div className="relative text-center before:mt-3.5 sm:before:mt-0">
                        <div className="mt-3 sm:mt-5">
                          <h3 className="text-lg font-semibold text-dark dark:text-light">
                            Gratis domain .personafolio.com
                          </h3>
                          <p className="mt-1 text-sm sm:text-base text-personaGray dark:text-neutral-400">
                            bebas pakai domain yang tersedia
                          </p>
                        </div>
                      </div>

                      <div className="relative text-center before:mt-3.5 sm:before:mt-0">
                        <div className="mt-3 sm:mt-5">
                          <h3 className="text-lg font-semibold text-dark dark:text-light">
                            24/7
                          </h3>
                          <p className="mt-1 text-sm sm:text-base text-personaGray dark:text-neutral-400">
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
    </>
  );
}
