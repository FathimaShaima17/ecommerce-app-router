import Image from "next/image";
import Rating from "@/app/component/rating/Rating";
import Products from "@/assets/product.jpg";
import computer from "@/assets/computer and accessories.jpg";
import fashion from "@/assets/fashion.jpg";
import clock from "@/assets/clock.png";
import gaming from "@/assets/gamingcontroller.png";
import delivery from "@/assets/delivery.png";
import hat from "@/assets/hat.png";
import headphone from "@/assets/headphone.png";
import jacket2 from "@/assets/jacket2.png";
import shoe from "@/assets/adidasshoes.png";
import bagpack from "@/assets/bagpack.png";
import cupboard from "@/assets/cupboard.png";
import grocery from "@/assets/grocery.png";
import shoeAd from "@/assets/shoe ad.png";
import Link from "next/link";

export default function HomeCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="group relative h-80  overflow-hidden cursor-pointer">
          <Image
            src={Products}
            alt="beauty picks"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-semibold">Beauty Picks</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative h-80  overflow-hidden cursor-pointer">
          <Image
            src={computer}
            alt="computer and accessoroies"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-semibold">Computer&Accessories</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group relative h-80 overflow-hidden cursor-pointer">
          <Image
            src={fashion}
            alt="fashion"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-semibold">Fashion</h3>
          </div>
        </div>
      </div>

      {/* ads */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8">
        {/* Card */}
        <div className="flex items-center justify-between bg-zinc-100 p-4 h-[160px]">
          {/* Text */}
          <div className="max-w-[60%]">
            <h3 className="text-lg font-semibold text-zinc-900">
              BuyNest Gaming Picks
            </h3>
            <p className="text-sm text-zinc-600 mt-1">
              Controllers & accessories
            </p>
            <p className="text-xs text-green-700 mt-2 font-medium">
              Limited time offers
            </p>
          </div>

          {/* Image */}
          <div className="relative w-[140px] h-[120px]">
            <Image
              src={gaming}
              alt="gaming controller"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Card */}
        <div className="flex items-center justify-between bg-zinc-100 p-4 h-[160px]">
          {/* text  */}
          <div className="max-w-[60%]">
            <h3 className="text-lg font-semibold text-zinc-900">
              BuyNext Daily Deals
            </h3>
            <p className="text-sm text-zinc-600 mt-1">Limited-time offers</p>
            <p className="text-xs text-amber-700 mt-2 font-medium">
              Hurry before time runs out
            </p>
          </div>
          {/* image  */}
          <div className="relative w-[140px] h-[120px]">
            <Image src={clock} alt="clock" fill className="object-contain" />
          </div>
        </div>
      </div>

      {/* delivery ad  */}
      <div className="group relative max-w-7xl mx-auto h-72 bg-yellow-50 overflow-hidden cursor-pointer flex items-center px-6 m-4">
        {/* TEXT */}
        <div className="z-10 max-w-md">
          <h1 className="text-5xl font-semibold text-zinc-900">
            From BuyNest to Your Door
          </h1>
          <p className="text-sm text-zinc-600 mt-2">
            Get your favorite products delivered fast and safely, right to your
            doorstep!
          </p>
          <p className="text-sm text-indigo-600 font-medium">
            Special deals available on your favorite products today!
          </p>
          <Link href="/products">
            <button className="mt-4 px-5 py-2 bg-yellow-50 text-zinc-950  border border-zinc-950 font-medium rounded ">
              Explore Products
            </button>
          </Link>
        </div>

        {/* IMAGE CONTAINER */}
        <div className="h-[350px] w-[350px]">
          <Image
            src={delivery}
            alt="Ad banner delivery"
            className="h-full w-full object-contain transition-transform duration-500 ml-10 "
          />
        </div>
      </div>

      {/* products  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
        {/* Card */}
        <div
          className="bg-white border border-zinc-200 shadow-sm
 p-4 h-[350px]"
        >
          <div className="relative w-[200px] h-[200px]">
            <Image src={hat} alt="hat" fill className="object-contain" />
          </div>

          {/* Text */}
          <div className="max-w-[60%]">
            <p className="text-sm text-zinc-400">sponsered</p>
            <h3 className="text-[13px] font-semibold text-zinc-900">
              Bucket Hat For Men Women Cotton Packable
            </h3>
            <Rating value={4} count={128} />
            <p className="text-zinc-900 font-bold text-md">₹799</p>
          </div>
        </div>

        {/* Card */}
        <div
          className=" bg-white border border-zinc-200 shadow-sm
p-4 h-[350px]"
        >
          <div className="relative w-[200px] h-[200px]">
            <Image src={jacket2} alt="jacket" fill className="object-contain" />
          </div>
          <div className="max-w-[60%]">
            <p className="text-sm text-zinc-400">sponsered</p>
            <h3 className="text-[13px] font-semibold text-zinc-900">
              Flocked Jacquard Contrast Varsity Jacket
            </h3>
            <Rating value={4} count={128} />
            <p className="text-zinc-900 font-bold text-md">₹3900</p>
          </div>
        </div>

        <div
          className=" bg-white border border-zinc-200 shadow-sm
  p-4 h-[350px]"
        >
          <div className="relative w-[200px] h-[200px]">
            <Image
              src={headphone}
              alt="apple headphone"
              fill
              className="object-contain"
            />
          </div>

          <div className="max-w-[60%]">
            <p className="text-sm text-zinc-400">sponsered</p>
            <h3 className="text-[13px] font-semibold text-zinc-900">
              Apple Airpods Max Pro, Long Lasting Battery
            </h3>
            <Rating value={4} count={128} />
            <p className="text-zinc-900 font-bold text-md">₹59,900</p>
          </div>
        </div>

        <div
          className="  bg-white border border-zinc-200 shadow-sm
 p-4 h-[350px]"
        >
          <div className="relative w-[200px] h-[200px]">
            <Image
              src={bagpack}
              alt="backpack"
              fill
              className="object-contain"
            />
          </div>
          <div className="max-w-[60%]">
            <p className="text-sm text-zinc-400">sponsered</p>
            <h3 className="text-[13px] font-semibold text-zinc-900">
              Letter Patch Decor Functional Backpack
            </h3>
            <Rating value={4} count={128} />
            <p className="text-zinc-900 font-bold text-md">₹889</p>
          </div>
        </div>

        <div
          className="bg-white border border-zinc-200 shadow-sm
  p-4 h-[350px]"
        >
          <div className="relative w-[200px] h-[200px]">
            <Image
              src={shoe}
              alt="adidas samba"
              fill
              className="object-contain"
            />
          </div>

          <div className="max-w-[60%]">
            <p className="text-sm text-zinc-400">sponsered</p>
            <h3 className="text-[13px] font-semibold text-zinc-900">
              adidas Samba OG "CreamWhite/Preloved Brown" sneakers
            </h3>
            <Rating value={5} count={2348} />
            <p className="text-zinc-900 font-bold text-md">₹10,999</p>
          </div>
        </div>
      </div>

      {/* 2nd ads */}

      {/* ads */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8">
        {/* Card */}
        <div className="flex items-center justify-between bg-amber-50 p-5 h-[300px]">
          {/* Text */}
          <div className="max-w-[60%]">
            <h3 className="text-3xl font-semibold text-zinc-900">
              Fresh Groceries
            </h3>
            <p className="text-xl text-zinc-600 mt-1">
              Daily essentials for your home
            </p>
            <p className="text-[15px] text-zinc-600">
              Fast & safe doorstep delivery
            </p>
            <p className="text-sm text-yellow-600">Best prices every day</p>
            <p className="text-sm text-indigo-600 font-medium">
              Shop on BuyNest
            </p>
          </div>

          {/* Image */}
          <div className="relative w-[300px] h-[300px]">
            <Image
              src={grocery}
              alt="grocery"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Card */}
        <div className="flex items-center justify-between bg-orange-50 p-4 h-[300px]">
          <div className="max-w-[60%]">
            <h3 className="text-3xl font-semibold text-zinc-900">
              Premium Cupboards
            </h3>
            <p className="text-sm text-zinc-600 mt-1">
              Elegant furniture for modern homes
            </p>
            <p className="text-sm text-zinc-600">
              Designed for style & storage
            </p>
            <p className="text-sm text-yellow-600">Long-lasting quality</p>
            <p className="text-sm text-indigo-600 font-medium">
              Explore on BuyNest
            </p>
          </div>

          <div className="relative w-[300px] h-[300px]">
            <Image
              src={cupboard}
              alt="cupboard"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* banner  */}

      <div className="relative max-w-7xl mx-auto h-[400px] bg-zinc-100 overflow-visible px-12 flex items-center m-16">
        {/* TEXT */}
        <div className="z-10 max-w-md ml-24 -mt-4">
          <p className="text-sm italic text-zinc-500">New Collection</p>

          <h3 className="text-5xl font-bold text-blue-950 leading-[1.1] mt-2">
            PREMIUM <br /> LEATHER BOOTS
          </h3>

          <p className="text-base text-zinc-600 mt-3 max-w-sm">
            Crafted with durable materials and a comfortable sole, designed for
            all-day wear wherever life takes you.
          </p>

          <p className="text-sm font-semibold text-green-600 mt-3">
            UP TO 40% OFF
          </p>

          <p className="text-sm text-zinc-700 mt-1">Starting at ₹3,499</p>

          <button className="mt-5 rounded-full bg-blue-950 px-6 py-2 text-sm font-semibold text-white hover:bg-blue-900 transition">
            Buy Now
          </button>
        </div>

        {/* IMAGE */}
        <div className="absolute right-6 -top-16 w-[460px] h-[460px]">
          <Image
            src={shoeAd}
            alt="Product"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
