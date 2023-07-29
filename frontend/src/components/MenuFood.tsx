import React from "react";

const MenuFood: React.FC = () => {
  return (
    <div className="flex flex-col w-full mt-20">
      <h1 className="font-bold md:text-2xl text-lg border-b border-gray-300 pb-4">
        Food
      </h1>
      {/* featured drinks */}
      <div className="flex flex-wrap md:justify-between">
        <div className="flex items-center mt-4 gap-4 md:w-[50%] w-full cursor-pointer">
          <div className="rounded-full overflow-hidden">
            <img
              src="https://starbuckscard.ph/sbcard-admin/storage/app/public/menu/457/LSGoHs1mg4zLufH8lzoZMebE7dujj4OL2ViXDDeD.jpeg"
              alt="featured-drinks"
              className="rounded-full hover:scale-110 ease-in-out duration-300 md:w-[150px] w-[100px]"
            />
          </div>
          <h1 className="font-semibold md:text-xl text-md">Featured Drinks</h1>
        </div>
        {/* brewed coffee */}
        <div className="flex items-center mt-4 gap-4 md:w-[50%] w-full cursor-pointer">
          <div className="rounded-full overflow-hidden">
            <img
              src="https://starbucks.ph/seed_data/CATEG_BrewedCoffee.jpg"
              alt="brewed coffee"
              className="rounded-full hover:scale-110 ease-in-out duration-300 md:w-auto w-[100px]"
            />
          </div>
          <h1 className="font-semibold md:text-xl text-md">Brewed Coffee</h1>
        </div>
        {/* espresso */}
        <div className="flex items-center mt-4 gap-4 md:w-[50%] w-full cursor-pointer">
          <div className="rounded-full overflow-hidden">
            <img
              src="https://starbucks.ph/seed_data/CATEG_Espresso.jpg"
              alt="espresso"
              className="rounded-full hover:scale-110 ease-in-out duration-300 md:w-auto w-[100px]"
            />
          </div>
          <h1 className="font-semibold md:text-xl text-md">Espresso</h1>
        </div>
        {/* blended beverage */}
        <div className="flex items-center mt-4 gap-4 md:w-[50%] w-full cursor-pointer">
          <div className="rounded-full overflow-hidden">
            <img
              src="https://starbucks.ph/seed_data/CATEG_BlendedBeverage.jpg"
              alt="blended beverage"
              className="rounded-full hover:scale-110 ease-in-out duration-300 md:w-auto w-[100px]"
            />
          </div>
          <h1 className="font-semibold md:text-xl text-md">Blended beverage</h1>
        </div>
        {/* Teavana tea */}
        <div className="flex items-center mt-4 gap-4 md:w-[50%] w-full cursor-pointer">
          <div className="rounded-full overflow-hidden">
            <img
              src="https://starbucks.ph/seed_data/CATEG_TeavanaTea.jpg"
              alt="teavana tea"
              className="rounded-full hover:scale-110 ease-in-out duration-300 md:w-auto w-[100px]"
            />
          </div>
          <h1 className="font-semibold md:text-xl text-md">Teavana Tea</h1>
        </div>
        {/* starbucks refresher */}
        <div className="flex items-center mt-4 gap-4 md:w-[50%] w-full cursor-pointer">
          <div className="rounded-full overflow-hidden">
            <img
              src="https://starbuckscard.ph/sbcard-admin/storage/app/public/menu/categories/41.jpg"
              alt="starbucks refresher"
              className="rounded-full hover:scale-110 ease-in-out duration-300 md:w-auto w-[100px]"
            />
          </div>
          <h1 className="font-semibold md:text-xl text-md">
            Starbucks Refresher
          </h1>
        </div>
        {/* chocolate & more */}
        <div className="flex items-center mt-4 gap-4 md:w-[50%] w-full cursor-pointer">
          <div className="rounded-full overflow-hidden">
            <img
              src="https://starbucks.ph/seed_data/CATEG_Chocolate_More.jpg"
              alt="chocolate & more"
              className="rounded-full hover:scale-110 ease-in-out duration-300 md:w-auto w-[100px]"
            />
          </div>
          <h1 className="font-semibold md:text-xl text-md">Chocolate & More</h1>
        </div>
        {/* Starbucks Reserve® */}
        <div className="flex items-center mt-4 gap-4 md:w-[50%] w-full cursor-pointer">
          <div className="rounded-full overflow-hidden">
            <img
              src="https://starbucks.ph/seed_data/CATEG_StarbucksReserve.jpg"
              alt="starbucks reserve"
              className="rounded-full hover:scale-110 ease-in-out duration-300 md:w-auto w-[100px]"
            />
          </div>
          <h1 className="font-semibold md:text-xl text-md">
            Starbucks Reserve®
          </h1>
        </div>
        {/* coffee traveler */}
        <div className="flex items-center mt-4 gap-4 md:w-[50%] w-full cursor-pointer">
          <div className="rounded-full overflow-hidden">
            <img
              src="https://starbuckscard.ph/sbcard-admin/storage/app/public/menu/categories/39_1667970623.jpg"
              alt="coffee traveler"
              className="rounded-full hover:scale-110 ease-in-out duration-300 md:w-auto w-[100px]"
            />
          </div>
          <h1 className="font-semibold md:text-xl text-md">Coffee Traveler</h1>
        </div>
      </div>
    </div>
  );
};

export default MenuFood;
