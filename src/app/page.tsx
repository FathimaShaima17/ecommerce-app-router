import Banner from "./component/banner/Banner";
import  HomeCards from './component/home/Home'

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans items-center justify-center pt-3 ">
      <Banner />
     <HomeCards/>
    </div>
  );
}
