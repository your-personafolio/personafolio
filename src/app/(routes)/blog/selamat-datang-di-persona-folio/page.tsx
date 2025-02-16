export const revalidate = 0;

const BlogDetailPage = async () => {
  return (
    <>
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
              <div className="shrink-0">
                <img
                  className="size-12 rounded-full"
                  src="/logo-persona.png"
                  alt="Avatar"
                />
              </div>

              <div className="grow">
                <div className="flex justify-between items-center gap-x-2">
                  <div>
                    <div className="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                      <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                        <span className="font-semibold text-gray-800 dark:text-neutral-200">
                          Persona Folio
                        </span>
                      </div>
                    </div>

                    <ul className="text-xs text-gray-500 dark:text-neutral-500">
                      <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                        Feb 15
                      </li>
                      <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                        09:00 AM
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
                Selamat Datang di Persona Folio
              </h2>

              <p className="text-lg text-gray-800 dark:text-neutral-200">
                dengan bangga mempersembahkan, <br />
                Persona Folio, sebuah produk berupa website yang siap membantu
                menunjukkan personamu kepada orang lain dengan sebuah website
                bertema profesional dan menarik.
              </p>
            </div>

            <figure>
              <img
                className="w-full object-cover rounded-xl"
                src="/persona-img-5.png"
                alt="Blog Image"
              />
              <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                Skema website Persona Folio.
              </figcaption>
            </figure>

            <p className="text-lg text-gray-800 dark:text-neutral-200">
              Persona Folio adalah sebuah website yang dibuat dengan menggunakan
              teknologi javascript terkini. Dengan memanfaatkan API dari Notion,
              isi konten pada website dapat diedit melalui sebuah tabel yang
              sudah diseting di Notion.
              <br /> <br />
              Dengan harga yang murah, kamu sudah bisa memiliki website pribadi
              impianmu. Website ini cocok untuk Mahasiswa yang ingin menampilkan
              portofolio tugas, proyek, magang, atau prestasi akademik. Pekerja
              yang ingin memperkuat personal branding dan menampilkan pengalaman
              kerja. Dan kamu yang membutuhkan website profesional untuk menarik
              klien.
            </p>

            <div className="space-y-3">
              <h3 className="text-2xl font-semibold dark:text-white">
                Harapan terbaik dari Persona Folio untukmu!
              </h3>

              <p className="text-lg text-gray-800 dark:text-neutral-200">
                Dengan keterbatasan dan sulitnya mencari peluang kerja. Ditambah
                dengan sedikitnya lapangan pekerjaaan pada beberapa daerah.
                Persona Folio ingin kamu untuk bisa memnampilkan personamu dalam
                sebuah website yang bisa diakses oleh semua orang.
                <br />
                <br />
                Persona Folio selalu bersemangat untuk membantu mewujudkan
                website impianmu.
              </p>
            </div>

            <blockquote className="text-center p-4 sm:px-7">
              <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-neutral-200">
                If u move, everything will move. If u have initiative,
                everything will be solve. If u work hard, everything will be
                fast. If u make it fast, everything will be earn more easily and
                bigger.
              </p>
              <p className="mt-5 text-gray-800 dark:text-neutral-200">
                from Someone-
              </p>
            </blockquote>

            <div>
              <a
                className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                href="javasvript:void(0)"
              >
                Website
              </a>
              <a
                className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                href="javasvript:void(0)"
              >
                Portfolio
              </a>
              <a
                className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                href="javasvript:void(0)"
              >
                Persona Folio
              </a>
              <a
                className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                href="javasvript:void(0)"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailPage;
