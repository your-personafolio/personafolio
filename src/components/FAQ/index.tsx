export default function FAQ() {
  return (
    <>
      <section>
        <div className=" py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-dark dark:text-light md:mb-6 lg:text-3xl">
                Frequently asked questions
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-personaSec md:text-xl">
                  Apakah perlu membayar langganan website perbulan/tahun?
                </h3>
                <p className="text-personaGray dark:text-neutral-400">
                  Tidak, cukup sekali bayar dan kamu bisa memiliki website tanpa
                  perlu biaya langganan.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-personaSec md:text-xl">
                  Apakah bisa menggunakan domain sendiri?
                </h3>
                <p className="text-personaGray dark:text-neutral-400">
                  Bisa, seandainya kamu memiliki domain sendiri dan ingin
                  diintegrasikan dengan personafolio bisa, tapi akan dikenakan
                  biaya tambahan.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-personaSec md:text-xl">
                  Siapa yang cocok menggunakan layanan ini?
                </h3>
                <p className="text-personaGray dark:text-neutral-400">
                  Mahasiswa yang ingin menampilkan portofolio tugas, proyek,
                  magang, atau prestasi akademik. Pekerja yang ingin memperkuat
                  personal branding dan menampilkan pengalaman kerja. Dan kamu
                  yang membutuhkan website profesional untuk menarik klien.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-personaSec md:text-xl">
                  Berapa lama waktu pengerjaan website?
                </h3>
                <p className="text-personaGray dark:text-neutral-400">
                  Tidak butuh waktu yang lama, cukup menunggu waktu maksimal{" "}
                  <strong>30 menit</strong>.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-personaSec md:text-xl">
                  Apakah saya bisa menambahkan fitur khusus?
                </h3>
                <p className="text-personaGray dark:text-neutral-400">
                  Tidak untuk saat ini. Persona Folio hanya menyediakan website
                  sesuai dengan tema yang sudah tersedia dan kamu bisa megedit
                  isinya.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-personaSec md:text-xl">
                  Bagaimana sistem pembayarannya?
                </h3>
                <p className="text-personaGray dark:text-neutral-400">
                  Setelah kamu mengisi form dan klik chekout, akan diarahkan ke
                  wa admin untuk melakukan pembayaran. Pembayaran bisa melalui
                  transfer bank atau melalui Gopay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
