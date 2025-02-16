import IBillboard from "@/features/billboards/core/types";
import type IProduct from "@/features/product/core/types";
import Image from "next/image";
import Billboard from "@/components/billboard";
import MainContainer from "@/components/partials/containers/main-container";
import ProductList from "@/components/product-list";
import Link from "next/link";

interface IHomeProps {
  billboard?: IBillboard;
  products?: IProduct[];
}

const Home = ({ billboard, products }: IHomeProps) => {
  return (
    <MainContainer>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8">
          <ProductList title="Featured Products" data={products ?? []} />
        </div>
      </div>
      <section>
        <div className="fixed bottom-6 inset-x-0 text-center z-50">
          <div className="inline-block bg-white shadow-lg border border-solid rounded-full py-3 px-4 dark:bg-neutral-800">
            <div className="flex items-center gap-x-1.5">
              <div className="inline-block">
                <Link
                  href="/"
                  className=" flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                >
                  <Image
                    alt="icon-home"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvdXNlIj48cGF0aCBkPSJNMTUgMjF2LThhMSAxIDAgMCAwLTEtMWgtNGExIDEgMCAwIDAtMSAxdjgiLz48cGF0aCBkPSJNMyAxMGEyIDIgMCAwIDEgLjcwOS0xLjUyOGw3LTUuOTk5YTIgMiAwIDAgMSAyLjU4MiAwbDcgNS45OTlBMiAyIDAgMCAxIDIxIDEwdjlhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ6Ii8+PC9zdmc+"
                    width={24}
                    height={24}
                  />
                  Home
                </Link>
              </div>

              <div className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>

              <div className="inline-block">
                <Link
                  href="/store"
                  className="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                >
                  <Image
                    alt="icon-home"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBhaW50YnJ1c2gtdmVydGljYWwiPjxwYXRoIGQ9Ik0xMCAydjIiLz48cGF0aCBkPSJNMTQgMnY0Ii8+PHBhdGggZD0iTTE3IDJhMSAxIDAgMCAxIDEgMXY5SDZWM2ExIDEgMCAwIDEgMS0xeiIvPjxwYXRoIGQ9Ik02IDEyYTEgMSAwIDAgMC0xIDF2MWEyIDIgMCAwIDAgMiAyaDJhMSAxIDAgMCAxIDEgMXYyLjlhMiAyIDAgMSAwIDQgMFYxN2ExIDEgMCAwIDEgMS0xaDJhMiAyIDAgMCAwIDItMnYtMWExIDEgMCAwIDAtMS0xIi8+PC9zdmc+"
                    width={24}
                    height={24}
                  />
                  Store
                </Link>
              </div>

              <div className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>

              <div className="inline-flex">
                <Link
                  href="/cart"
                  className="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                >
                  <Image
                    alt="icon-home"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNob3BwaW5nLWJhc2tldCI+PHBhdGggZD0ibTE1IDExLTEgOSIvPjxwYXRoIGQ9Im0xOSAxMS00LTciLz48cGF0aCBkPSJNMiAxMWgyMCIvPjxwYXRoIGQ9Im0zLjUgMTEgMS42IDcuNGEyIDIgMCAwIDAgMiAxLjZoOS44YTIgMiAwIDAgMCAyLTEuNmwxLjctNy40Ii8+PHBhdGggZD0iTTQuNSAxNS41aDE1Ii8+PHBhdGggZD0ibTUgMTEgNC03Ii8+PHBhdGggZD0ibTkgMTEgMSA5Ii8+PC9zdmc+"
                    width={24}
                    height={24}
                  />
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainContainer>
  );
};

export default Home;
