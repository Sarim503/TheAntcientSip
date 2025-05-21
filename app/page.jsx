import Blogs from "@/shred/Blogs";
import Carsel from "@/shred/Carousel";
import CarouselMenu from "@/shred/CarouselMenu";
import SubscribeMenu from "@/shred/SubscribeMenu";
import Footerpage from "@/shred/Footerpage";
import Xshape from "@/shred/xshape";


export default function Home() {
  return <div className="flex flex-col">
    <Carsel />
    <CarouselMenu />
    <Blogs />
    <SubscribeMenu />
    <Footerpage />
    
  </div>;
}
  