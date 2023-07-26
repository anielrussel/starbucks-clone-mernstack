import React, { useState } from "react";
import axios from "axios";
import AdminSidebar from "./AdminSidebar";

interface MenuState {
  name: string;
  calories: number;
  category1: string;
  category2: string;
  category3: string;
  description: string;
}
const AdminNewProduct = () => {
  const [formData, setFormData] = useState<MenuState>({
    name: "",
    calories: 0,
    category1: "",
    category2: "",
    category3: "",
    description: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [image, setImage] = useState("");

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      category1: value,
      category2: "",
      category3: "",
    }));
  };

  const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      category2: value,
    }));
  };

  const handleSubCategory1Change = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      category3: value,
    }));
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      description: value,
    }));
  };

  const previewFiles = (imageFile: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);

    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    console.log(image);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImageFile(file);
    previewFiles(file);
    console.log(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!imageFile) {
      console.error("Please select an image");
      return;
    }

    const formMenuData = new FormData();
    formMenuData.append("image", imageFile);
    formMenuData.append("name", formData.name);
    formMenuData.append("calories", formData.calories.toString());
    formMenuData.append("category1", formData.category1);
    formMenuData.append("category2", formData.category2);
    formMenuData.append("category3", formData.category3);
    formMenuData.append("description", formData.description);

    try {
      const response = await axios.post(
        "http://localhost:4000/productMenu",
        formMenuData
      );
      //handle response
      setFormData({
        name: "",
        calories: 0,
        category1: "",
        category2: "",
        category3: "",
        description: "",
      });
      console.log("Image uploaded successfully", response.data);
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

  return (
    <main>
      <AdminSidebar />
      <div className="pt-32 pb-28 pl-[20%]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col max-w-[50%] mx-auto bg-slate-200 px-16 py-6 rounded-md shadow-lg"
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            className="mb-3 py-1 pl-1 outline-blue-500 rounded-sm"
          />

          <label htmlFor="calories">Calories</label>
          <input
            type="text"
            name="calories"
            value={formData.calories}
            onChange={handleFormChange}
            className="mb-3 py-1 pl-1 outline-blue-500 rounded-sm"
          />
          {/* category 1 */}
          <label htmlFor="category1">Category</label>
          <select
            name="category1"
            onChange={handleCategoryChange}
            className="mb-3 py-1 pl-1 outline-blue-500 rounded-sm"
          >
            <option value="">Select Category</option>
            <option value="menu">Menu</option>
            <option value="merchandise">Merchandise</option>
          </select>
          {/* categiry 2 */}
          {/* check if menu is chosen then show submenu */}
          {formData.category1 === "menu" && (
            <>
              <label htmlFor="category2">Select Subcategory for Menu</label>
              <select
                name="category2"
                onChange={handleSubCategoryChange}
                className="mb-3 py-1 pl-1 outline-blue-500 rounded-sm"
              >
                <option value="">Select category</option>
                <option value={"drinks"}>Drinks</option>
                <option value={"foods"}>Foods</option>
                <option value={"coffee"}>Coffee</option>
              </select>
            </>
          )}

          {/* check if merchandise is chosen then show submenu */}
          {formData.category1 === "merchandise" && (
            <>
              <label htmlFor="category2">
                Select Subcategory for Merchandise
              </label>
              <select
                name="category2"
                onChange={handleSubCategoryChange}
                className="mb-3 py-1 pl-1 outline-blue-500 rounded-sm"
              >
                <option value={"blackpink"}>BLACKPINK + Starbucks</option>
                <option value={"core refresh"}>Core Refresh</option>
                <option value={"summer field"}>Summer Field</option>
                <option value={"shining pastel"}>Shining Pastel</option>
                <option value={"summer series"}>
                  Summer Been There Series
                </option>
                <option value={"navy core"}>Navy Core</option>
                <option value={"core green"}>Core Green</option>
                <option value={"been there"}>Been There Series</option>
              </select>
            </>
          )}
          {/* category 3 */}
          {/* if drinks is chosen */}
          {formData.category1 === "menu" && formData.category2 === "drinks" && (
            <>
              <label htmlFor="category3">Select Subcategory for Drinks</label>
              <select
                name="category3"
                onChange={handleSubCategory1Change}
                className="mb-3 py-1 pl-1 outline-blue-500 rounded-sm"
              >
                <option value="">Select category</option>
                <option value={"featured"}>Featured Drinks</option>
                <option value={"brewed"}>Brewed Coffee</option>
                <option value={"espresso"}>Espresso</option>
                <option value={"blended"}>Blended Beverage</option>
                <option value={"teavana"}>Teavana Tea</option>
                <option value={"refresher"}>Starbucks Refreshers</option>
                <option value={"chocolate"}>Chocolate & More</option>
                <option value={"reserve"}>Starbucks Reserve</option>
                <option value={"traveler"}>Coffee Traveler</option>
              </select>
            </>
          )}

          {/* if fooed is chosen */}
          {formData.category1 === "menu" && formData.category2 === "foods" && (
            <>
              <label htmlFor="category3">Select Subcategory for Food</label>
              <select
                name="category3"
                onChange={handleSubCategory1Change}
                className="mb-3 py-1 pl-1 outline-blue-500 rounded-sm"
              >
                <option value={"featured"}>Featured Food</option>
                <option value={"allday"}>All-day Bakery</option>
                <option value={"sandwiches"}>Sandwiches & Pastas</option>
                <option value={"oatmeal"}>Oatmeal, Yogurts, & Fruits</option>
                <option value={"desserts"}>Desserts</option>
                <option value={"bake"}>Bake Box</option>
                <option value={"ready"}>Ready-to-Eat & More</option>
              </select>
            </>
          )}

          {/* if coffee is chosen */}
          {formData.category1 === "menu" && formData.category2 === "coffee" && (
            <>
              <label htmlFor="category3">Select Subcategory for Coffee</label>
              <select
                name="category3"
                onChange={handleSubCategory1Change}
                className="mb-3 py-1 pl-1 outline-blue-500 rounded-sm"
              >
                <option value={"bean"}>Whole Bean</option>
                <option value={"via"}>Starbucks VIA®</option>
                <option value={"origami"}>Starbucks Origami</option>
                <option value={"reserve"}>Starbucks Reserve®</option>
              </select>
            </>
          )}

          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            maxLength={1000}
            value={formData.description}
            onChange={handleDescriptionChange}
            className="mb-6 py-1 pl-1 outline-blue-500 rounded-sm h-[100px]"
          />

          <input type="file" name="image" onChange={handleImageChange} />
          <div className="flex items-center justify-center">
            {" "}
            <img src={image} alt="" />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="border border-green-700 mt-12 py-1 px-10 font-open-sans bg-green-700 text-white shadow-md hover:bg-white hover:text-black"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AdminNewProduct;
