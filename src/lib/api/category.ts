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
