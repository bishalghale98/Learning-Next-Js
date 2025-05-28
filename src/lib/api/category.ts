import api from "./api";

export const getCategory = async () => {
  try {
    const response = await api.get("/category");
    return response;
  } catch (error: any) {
    console.error("Error fetching categories:", error);
    return error.message;
  }
};

interface ICategoryData {
  name: string;
  description: string;
}

export const createCategory = async (data: ICategoryData) => {
  const response = await api.post("/category", data);

  return response;
};

export const deleteCategory = async (id: string) => {
  const response = await api.delete("/category/" + id);
  return response;
};
