import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuProducts from "../components/MenuProducts";

const Menu: React.FC = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-[73px] md:pt-[100px] pb-16">
        <header
          className="bg-cover bg-center h-[390px] md:h-[560px]"
          style={{
            backgroundImage:
              "url('https://starbuckscard.ph/sbcard-admin/storage/app/public/banners/zlXjukJ0bqyIFwTuCoSvbIJltDMZRg2IZiiYfBai.jpeg')",
          }}
        >
          <div className="flex flex-col gap-10 justify-center pl-6 md:pl-[250px] pt-20 md:pt-[180px]">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl md:text-7xl font-extrabold text-green-950 w-[85%]">
                Bring on the Sunshine
              </h1>
              <h3 className="w-[85%] font-medium">
                Cool off and summer on with the new beverages for every sunny
                day
              </h3>
            </div>
            <p className="border border-green-950 rounded-full max-w-[210px] px-4 py-2 text-md font-bold text-green-900 cursor-pointer">
              Discover the flavors
            </p>
          </div>
        </header>
        <MenuProducts />
      </div>
      <Footer />
    </main>
  );
};

export default Menu;
