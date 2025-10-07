import Blogs from "@/shred/Blogs";
import Carsel from "@/shred/Carousel";
import CarouselMenu from "@/shred/CarouselMenu";
import SubscribeMenu from "@/shred/SubscribeMenu";
import Footerpage from "@/shred/Footerpage";
import Xshape from "@/shred/xshape";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[url('/images/bg1.png')] bg-cover bg-center">
        <div className="bg-black/40">
          <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-10">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                The Ancient Ship
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-200">
                Savor handcrafted burgers, sizzling BBQ, juicy steaks and more.
              </p>
              <div className="mt-8 flex gap-4">
                <Link href="/viewall" className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
                  Explore Menu
                </Link>
                <Link href="/cart" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                  View Cart
                </Link>
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              <img src="/images/burger.jpg" alt="Signature burger" className="w-full max-w-md rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Existing Sections */}
      <CarouselMenu />
      <Carsel />
      <SubscribeMenu />
    </div>
  );
}
