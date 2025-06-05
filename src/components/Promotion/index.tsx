import Image from "next/image";

export default function Promotion() {
  return (
    <>
      {/* Alasan memilih Personafolio */}
      <section>
        <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-4xl text-dark dark:text-light">
                    Waktunya upgrade portfolio kalian dari PPT atau PDF ke
                    Website!
                  </h2>
                </div>

                <ul className="mt-8 divide-y border-y *:py-3 *:flex *:items-center *:gap-3 text-personaGray dark:text-neutral-400">
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
    </>
  );
}
