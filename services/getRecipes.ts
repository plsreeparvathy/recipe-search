import axios from "axios";

const BASE_URL = "https://api.edamam.com/api/recipes/v2";

export const getRecipes = async (query: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        type: "public",
        q: query,
        app_id: process.env.NEXT_PUBLIC_EDAMAM_APP_ID,
        app_key: process.env.NEXT_PUBLIC_EDAMAM_APP_KEY,
      },
      headers: {
        "Edamam-Account-User": "plsreeparvathy", 
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};