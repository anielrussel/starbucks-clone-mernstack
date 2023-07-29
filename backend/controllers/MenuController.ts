import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import cloudinary from "cloudinary";
import fileUpload from "express-fileupload";

const prisma = new PrismaClient();

export const findAllMenu = async (req: Request, res: Response) => {
  try {
    const allMenu = await prisma.menu.findMany();
    console.log(allMenu);
    res.status(200).json(allMenu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Cannot find items" });
  }
};

export const createProductMenu = async (req: Request, res: Response) => {
  const { name, calories, category1, category2, category3, description } =
    req.body;
  const file = req.files?.image as fileUpload.UploadedFile;

  try {
    if (!file) {
      throw new Error("Image file is missing.");
    }

    const result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
    });

    const imageUrl = result.secure_url;

    const newMenu = await prisma.menu.create({
      data: {
        name,
        calories: parseInt(calories),
        category1,
        category2,
        category3,
        description,
        imageUrl,
      },
    });

    console.log(newMenu);
    res.status(200).json(newMenu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to upload menu item" });
  }
};

export const deleteProductMenu = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    // delete item by id
    await prisma.menu.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ message: "item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete item" });
  }
};

export const updateMenu = async (req: Request, res: Response) => {
  const { id, name, calories, category1, category2, category3, description } =
    req.body;

  try {
    // Find menu item by id
    const menuToUpdate = await prisma.menu.findUnique({
      where: {
        id,
      },
    });

    if (!menuToUpdate) {
      res.status(404).json({ message: "Menu item not found" });
      return;
    }

    // Update the menu item with new data
    const updatedMenu = await prisma.menu.update({
      where: {
        id,
      },
      data: {
        name: name || menuToUpdate.name,
        calories: calories ? parseInt(calories) : menuToUpdate.calories,
        category1: category1 || menuToUpdate.category1,
        category2: category2 || menuToUpdate.category2,
        category3: category3 || menuToUpdate.category3,
        description: description || menuToUpdate.description,
      },
    });

    console.log(updatedMenu);
    res.status(200).json(updatedMenu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update menu item" });
  }
};
