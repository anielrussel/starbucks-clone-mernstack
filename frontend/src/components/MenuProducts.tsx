import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

interface MenuState {
  id: number;
  name: string;
  calories: number;
  category1: string;
  category2: string;
  category3: string;
  description: string;
  imageUrl: string;
}

// Function to map category to custom title
const getCategoryTitle = (category: any) => {
  switch (category) {
    case "featured":
      return "Featured Drinks";
    case "brewed":
      return "Brewed Coffee";
    case "espresso":
      return "Espresso";
    default:
      return category; // If no custom title is specified, use the category as the title
  }
};

const MenuProducts: React.FC = () => {
  const [menuProducts, setMenuProducts] = useState<MenuState[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const fetchMenuProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/menu`);
      const data = response.data;

      //map the fetch data
      const mappedData = data.map((item: MenuState) => ({
        id: item.id,
        name: item.name,
        calories: item.calories,
        category1: item.category1,
        category2: item.category2,
        category3: item.category3,
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

  // handle click of image
  const handleImageClick = (category3: string) => {
    setSelectedCategory(category3);
  };

  // filter products by category
  const filteredProducts = selectedCategory
    ? menuProducts.filter((product) => product.category3 === selectedCategory)
    : [];

  // Utility function to find products based on a condition
  function findProductsByCategory(
    products: MenuState[],
    category: string
  ): MenuState[] {
    return products.filter((product) => product.category3 === category);
  }

  const categoriesToRender = ["featured", "espresso", "brewed"];

  // Group products by category2
  const groupedProducts: { [key: string]: MenuState[] } = {};
  menuProducts.forEach((product) => {
    if (!groupedProducts[product.category2]) {
      groupedProducts[product.category2] = [];
    }
    groupedProducts[product.category2].push(product);
  });

  return (
    <div className="font-open-sans">
      <nav className="bg-[#f9f9f9] md:px-32 px-8 py-6 flex gap-4 md:gap-[220px] items-center justify-between md:justify-normal">
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
      <div className="md:px-32 px-8 flex md:flex-row flex-col md:gap-[100px]">
        <div className="mt-4 md:block flex md:flex-col overflow-x-auto custom-scrollbar">
          {/* drinks */}
          <h1 className="font-semibold text-lg hidden md:block">Drinks</h1>
          <ul className="flex md:flex-col gap-4 md:mt-4">
            <li className=" text-gray-500 md:font-medium font-normal text-sm md:text-lg cursor-pointer">
              Featured Drinks
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-lg cursor-pointer">
              Brewed Coffee
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-lg cursor-pointer">
              Espresso
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-lg cursor-pointer">
              Blended Beverage
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-lg cursor-pointer">
              Teavana Tea
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-lg cursor-pointer">
              Starbucks Refreshers
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-lg cursor-pointer">
              Chocolate & More
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-lg cursor-pointer">
              Starbucks Reserve®
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-lg cursor-pointer pr-4 md:pr-0">
              Coffee Traveler
            </li>
          </ul>
          {/* foods */}
          <h1 className="font-semibold text-lg mt-10 hidden md:block">Food</h1>
          <ul className="flex md:flex-col gap-4 md:mt-4">
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-lg cursor-pointer">
              Featured Food
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-lg cursor-pointer">
              All-day Bakery
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-lg cursor-pointer">
              Sandwiches & Pastas
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-lg cursor-pointer">
              Oatmeal, Yogurts, & Fruits
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-lg cursor-pointer">
              Desserts
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-lg cursor-pointer">
              Bake Box
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-lg cursor-pointer  pr-4 md:pr-0">
              Ready-to-Eat & More
            </li>
          </ul>
          {/* coffee */}
          <h1 className="font-semibold text-lg mt-10 hidden md:block">
            At Home Coffee
          </h1>
          <ul className="flex md:flex-col gap-4 md:mt-4">
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-lg cursor-pointer">
              Whole Bean
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-lg cursor-pointer">
              Starbucks VIA®
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-lg cursor-pointer">
              Starbucks Origami
            </li>
            <li className="text-gray-500 md:font-medium font-normal text-sm md:text-lg cursor-pointer">
              Starbucks Reserve®
            </li>
          </ul>
        </div>

        {/* show selected category when click */}
        {selectedCategory ? (
          <div className="flex flex-col w-full mt-12">
            <h1 className="font-bold md:text-2xl text-lg border-b border-gray-300 pb-4">
              {selectedCategory.toUpperCase()}
            </h1>
            <div className="flex flex-wrap">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col items-center mt-4 gap-4 md:w-[25%] text-center w-full cursor-pointer"
                >
                  <div className="rounded-full overflow-hidden">
                    <img
                      src={product.imageUrl}
                      className="rounded-full hover:scale-110 ease-in-out duration-300 md:w-[150px] w-[100px]"
                    />
                  </div>
                  <h1 className="font-normal md:text-xl text-md">
                    {product.name}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full flex items-start">
            {categoriesToRender.map((category) => {
              const productsForCategory = findProductsByCategory(
                menuProducts,
                category
              );
              const productToRender =
                productsForCategory.length > 0 ? productsForCategory[0] : null;

              return (
                <div>
                  <h1>{productToRender?.category2}</h1>
                  {productToRender ? (
                    <div className="flex items-center gap-4 w-[50%]">
                      <img
                        key={productToRender.id}
                        src={productToRender.imageUrl}
                        onClick={() =>
                          handleImageClick(productToRender.category3)
                        }
                        className="rounded-full hover:scale-110 ease-in-out duration-300 md:w-[150px] w-[100px]"
                      />
                      <h1 className="text-xl font-semibold">
                        {getCategoryTitle(productToRender.category3)}
                      </h1>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuProducts;
