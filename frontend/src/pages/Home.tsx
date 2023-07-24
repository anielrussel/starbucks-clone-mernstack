import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <main>
      <Navbar />
      <div className="relative z-30 pt-[73px] md:pt-[100px] font-sans pb-24">
        <header
          className="bg-cover bg-right md:bg-center h-[390px] md:h-[560px]"
          style={{
            backgroundImage:
              "url('https://starbuckscard.ph/sbcard-admin/storage/app/public/banners/XkuwBiAmpJs2P5KFVFozjGyoTUTakTcQbuma5hiV.jpeg')",
          }}
        >
          <div className="flex flex-col gap-12 justify-center pl-6 md:pl-[250px] pt-32 md:pt-[180px]">
            <h1 className="text-4xl md:text-7xl font-extrabold text-green-950">
              Burst of Summer
            </h1>
            <p className="border border-green-950 rounded-full max-w-[210px] px-4 py-2 text-md font-bold text-green-900 cursor-pointer">
              Discover the flavors
            </p>
          </div>
        </header>

        <div className="md:px-32 px-0 flex flex-col">
          <section className="mt-10 flex flex-col md:flex-row">
            <div
              className="bg-cover bg-center h-[250px] md:h-[320px] md:w-[50%]"
              style={{
                backgroundImage:
                  "url('https://starbucks.ph/seed_data/Starbucks_eGift_-_Homepage.jpg')",
              }}
            ></div>
            <div className="bg-green-900 flex flex-col gap-8 justify-center items-center text-center text-white py-10 px-12 md:w-[50%]">
              <h1 className="text-2xl font-bold">Gifting Made Easy</h1>
              <p className="font-semibold">
                Order and send a Starbucks eGift through GLife on GCash today.
              </p>
              <button className="border border-white rounded-full px-4 py-1 hover:bg-green-800">
                Learn more
              </button>
            </div>
          </section>

          <div className="mt-10 flex flex-col md:flex-row gap-6">
            <section className="md:w-[50%]">
              <div
                className="bg-cover bg-center h-[250px] md:h-[320px]"
                style={{
                  backgroundImage:
                    "url('https://starbuckscard.ph/sbcard-admin/storage/app/public/banners/LkfYZ38GvsmXStVCGmBeK4RVvh9HH0SjjFqAxhjR.jpeg')",
                }}
              ></div>
              <div className="bg-green-900 flex flex-col gap-8 justify-center items-center text-center text-white h-[300px] px-12">
                <h1 className="text-2xl font-bold">Caramel Honey Yummy</h1>
                <p className="font-semibold">
                  The new Honeycomb Salted Caramel Oatmilk will leave you
                  wanting to relax, refresh and repeat all summer long.
                </p>
                <button className="border border-white rounded-full px-4 py-1 hover:bg-green-800">
                  Sip, sip, go
                </button>
              </div>
            </section>

            <section className="md:w-[50%]">
              <div
                className="bg-cover bg-center h-[250px] md:h-[320px]"
                style={{
                  backgroundImage:
                    "url('https://starbuckscard.ph/sbcard-admin/storage/app/public/banners/MMmBL3hCJWBrwaXmStFvmiKmTjXM6US0zgz0P2WW.jpeg')",
                }}
              ></div>
              <div className="bg-green-900 flex flex-col gap-8 justify-center items-center text-center text-white h-[300px] px-12">
                <h1 className="text-2xl font-bold">Good day goodness</h1>
                <p className="font-semibold">
                  Yummy treats for your summer days with new and returning
                  snacks.
                </p>
                <button className="border border-white rounded-full px-4 py-1 hover:bg-green-800">
                  Crave more
                </button>
              </div>
            </section>
          </div>

          <div className="mt-10 flex flex-col md:flex-row gap-6">
            <section className="md:w-[50%]">
              <div
                className="bg-cover bg-center h-[250px] md:h-[320px]"
                style={{
                  backgroundImage:
                    "url('https://starbuckscard.ph/sbcard-admin/storage/app/public/banners/eDOMra6X6535Yzi2y48b6YrNwboEnmaAI8rdvpza.jpeg')",
                }}
              ></div>
              <div className="bg-[#ceeae3] flex flex-col gap-8 justify-center items-center text-center text-black h-[300px] px-12">
                <h1 className="text-2xl font-bold">Shining Pastel</h1>
                <p className="font-semibold">
                  Fill your favorite drink and go wherever the day takes you.
                </p>
                <button className="border border-black rounded-full px-4 py-1 hover:bg-green-800">
                  Explore
                </button>
              </div>
            </section>

            <section className="md:w-[50%]">
              <div
                className="bg-cover bg-center h-[250px] md:h-[320px]"
                style={{
                  backgroundImage:
                    "url('https://starbucks.ph/seed_data/Starbucks_Delivers_-_Homepage.jpg')",
                }}
              ></div>
              <div className="bg-[#ceeae3] flex flex-col gap-8 justify-center items-center text-center text-black h-[300px] px-12">
                <h1 className="text-2xl font-bold">No time to head out?</h1>
                <p className="font-semibold">
                  Have your favorites delivered straight to your doorstep.
                </p>
                <button className="border border-black rounded-full px-4 py-1 hover:bg-green-800">
                  Learn more
                </button>
              </div>
            </section>
          </div>

          <section className="mt-10 flex flex-col md:flex-row">
            <div
              className="bg-cover bg-center h-[250px] md:h-[320px] md:w-[50%]"
              style={{
                backgroundImage:
                  "url('https://starbuckscard.ph/sbcard-admin/storage/app/public/banners/S7YfLdvMxmRb6CbsC23JQsBgfMFelfTEKoP4wLcu.jpeg')",
              }}
            ></div>
            <div className="bg-[#ceeae3] flex flex-col gap-8 justify-center items-center text-center text-green-950 py-10 px-12 md:w-[50%]">
              <h1 className="text-2xl font-bold">Sweet as you like</h1>
              <p className="font-semibold">
                Customize your sweetness to suit your wellness needs. *Select
                beverages only
              </p>
            </div>
          </section>

          <section className="mt-10 flex flex-col md:flex-row">
            <div className="bg-[#fbf6ee] flex flex-col gap-8 justify-center items-center text-center text-green-950 py-10 px-12 md:w-[50%]">
              <h1 className="text-2xl font-bold">Starbucks Stories</h1>
              <p className="font-semibold">
                Continuing to inspire and nurture the human spirit–one person,
                one cup and one neighborhood at a time.
              </p>
              <button className="border border-black rounded-full px-4 py-1 hover:bg-green-800">
                Explore
              </button>
            </div>
            <div
              className="bg-cover bg-center h-[250px] md:h-[320px] md:w-[50%]"
              style={{
                backgroundImage:
                  "url('https://starbuckscard.ph/sbcard-admin/storage/app/public/banners/w0mLfB3L89fKjvCzmuJ6VmiQerQeAAswTImeVk3z.jpeg')",
              }}
            ></div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
