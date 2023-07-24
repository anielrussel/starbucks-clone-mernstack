import React, { useState } from "react";
import axios from "axios";
import AdminSidebar from "./AdminSidebar";

interface MenuState {
  name: string;
  calories: number;
  category: string;
  subCategory: string;
  description: string;
}
const AdminNewProduct = () => {
  const [formData, setFormData] = useState<MenuState>({
    name: "",
    calories: 0,
    category: "",
    subCategory: "",
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
      category: value,
    }));
  };

  const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      subCategory: value,
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
    formMenuData.append("category", formData.category);
    formMenuData.append("subCategory", formData.subCategory);
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
        category: "",
        subCategory: "",
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

          <label htmlFor="category">Category</label>
          <select
            name="category"
            onChange={handleCategoryChange}
            className="mb-3 py-1 pl-1 outline-blue-500 rounded-sm"
          >
            <option value={"menu"}>Menu</option>
            <option value={"merchandise"}>Merchandise</option>
          </select>

          <label htmlFor="subcategory">subCategory</label>
          <select
            name="subcategory"
            onChange={handleSubCategoryChange}
            className="mb-3 py-1 pl-1 outline-blue-500 rounded-sm"
          >
            <option value={"drinks"}>Drinks</option>
            <option value={"foods"}>Foods</option>
            <option value={"coffee"}>Coffee</option>
          </select>

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
