import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";

interface MenuState {
  name: string;
  calories: number;
  description: string;
  imageUrl: string;
}

const MenuProducts: React.FC = () => {
  const [menuProducts, setMenuProducts] = useState<MenuState[]>([]);

  const fetchMenuProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/menu`);
      const data = response.data;

      //map the fetch data
      const mappedData = data.map((item: MenuState) => ({
        name: item.name,
        calories: item.calories,
        description: item.description,
        imageUrl: item.imageUrl,
      }));
      console.log(mappedData);
      setMenuProducts(mappedData);
    } catch (error) {
      console.log("Failed to fetch product");
    }
  };

  useEffect(() => {
    fetchMenuProducts();
  }, []);

  return (
    <div className="font-open-sans">
      <nav className="bg-[#f9f9f9] md:px-32 px-8 py-6 flex gap-4 md:gap-[150px] items-center justify-between md:justify-normal">
        <h1 className="font-semibold text-2xl">Menu</h1>
        <div className="flex items-center justify-end">
          <input
            type="text"
            placeholder="Search our drinks, food, coffee beans.."
            className="border border-black rounded-lg py-3 pl-2 outline-green-700 w-[400px] hidden md:block"
          />
          <span className="md:absolute mr-6">
            <BsSearch size={20} />
          </span>
        </div>
      </nav>
      <div className="md:px-32 px-8 flex md:flex-row flex-col md:gap-[65px]">
        <div className="mt-4 md:block flex md:flex-col overflow-x-auto custom-scrollbar">
          {/* drinks */}
          <h1 className="font-semibold text-lg hidden md:block">Drinks</h1>
          <ul className="flex md:flex-col gap-4 md:mt-4">
            <li className=" text-gray-500 md:font-medium font-normal text-sm md:text-normal">
              Featured Drinks
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-normal">
              Brewed Coffee
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-normal">
              Espresso
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-normal">
              Blended Beverage
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-normal">
              Teavana Tea
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-normal">
              Starbucks Refreshers
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-normal">
              Chocolate & More
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-normal">
              Starbucks Reserve®
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-normal pr-4 md:pr-0">
              Coffee Traveler
            </li>
          </ul>
          {/* foods */}
          <h1 className="font-semibold text-lg mt-10 hidden md:block">Food</h1>
          <ul className="flex md:flex-col gap-4 md:mt-4">
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-normal">
              Featured Food
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-normal">
              All-day Bakery
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-normal">
              Sandwiches & Pastas
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-normal">
              Oatmeal, Yogurts, & Fruits
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-normal">
              Desserts
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-normal">
              Bake Box
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-normal  pr-4 md:pr-0">
              Ready-to-Eat & More
            </li>
          </ul>
          {/* coffee */}
          <h1 className="font-semibold text-lg mt-10 hidden md:block">
            At Home Coffee
          </h1>
          <ul className="flex md:flex-col gap-4 md:mt-4">
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-normal">
              Whole Bean
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-normal">
              Starbucks VIA®
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-normal">
              Starbucks Origami
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-normal">
              Starbucks Reserve®
            </li>
          </ul>
        </div>

        <div className="flex flex-col w-full">
          <h1 className="font-bold md:text-2xl text-lg border-b border-gray-300 pb-4">
            Drinks
          </h1>
          {/* featured drinks */}
          <div className="flex flex-wrap md:justify-between">
            <div className="flex items-center mt-4 gap-4 md:w-[50%] w-full">
              <div className="rounded-full overflow-hidden">
                <img
                  src="https://starbuckscard.ph/sbcard-admin/storage/app/public/menu/categories/1_1685980622.jpg"
                  alt="featured-drinks"
                  className="rounded-full hover:scale-110 ease-in-out duration-300 md:w-auto w-[100px]"
                />
              </div>
              <h1 className="font-semibold md:text-xl text-md">
                Featured Drinks
              </h1>
            </div>
            {/* brewed coffee */}
            <div className="flex items-center mt-4 gap-4 md:w-[50%] w-full">
              <div className="rounded-full overflow-hidden">
                <img
                  src="https://starbucks.ph/seed_data/CATEG_BrewedCoffee.jpg"
                  alt="brewed coffee"
                  className="rounded-full hover:scale-110 ease-in-out duration-300 md:w-auto w-[100px]"
                />
              </div>
              <h1 className="font-semibold md:text-xl text-md">
                Brewed Coffee
              </h1>
            </div>
            {/* espresso */}
            <div className="flex items-center mt-4 gap-4 md:w-[50%] w-full">
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
            <div className="flex items-center mt-4 gap-4 md:w-[50%] w-full">
              <div className="rounded-full overflow-hidden">
                <img
                  src="https://starbucks.ph/seed_data/CATEG_BlendedBeverage.jpg"
                  alt="blended beverage"
                  className="rounded-full hover:scale-110 ease-in-out duration-300 md:w-auto w-[100px]"
                />
              </div>
              <h1 className="font-semibold md:text-xl text-md">
                Blended beverage
              </h1>
            </div>
            {/* Teavana tea */}
            <div className="flex items-center mt-4 gap-4 md:w-[50%] w-full">
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
            <div className="flex items-center mt-4 gap-4 md:w-[50%] w-full">
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
            <div className="flex items-center mt-4 gap-4 md:w-[50%] w-full">
              <div className="rounded-full overflow-hidden">
                <img
                  src="https://starbucks.ph/seed_data/CATEG_Chocolate_More.jpg"
                  alt="chocolate & more"
                  className="rounded-full hover:scale-110 ease-in-out duration-300 md:w-auto w-[100px]"
                />
              </div>
              <h1 className="font-semibold md:text-xl text-md">
                Chocolate & More
              </h1>
            </div>
            {/* Starbucks Reserve® */}
            <div className="flex items-center mt-4 gap-4 md:w-[50%] w-full">
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
            <div className="flex items-center mt-4 gap-4 md:w-[50%] w-full">
              <div className="rounded-full overflow-hidden">
                <img
                  src="https://starbuckscard.ph/sbcard-admin/storage/app/public/menu/categories/39_1667970623.jpg"
                  alt="coffee traveler"
                  className="rounded-full hover:scale-110 ease-in-out duration-300 md:w-auto w-[100px]"
                />
              </div>
              <h1 className="font-semibold md:text-xl text-md">
                Coffee Traveler
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuProducts;
