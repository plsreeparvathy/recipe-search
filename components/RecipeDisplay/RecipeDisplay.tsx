"use client";
import { use, useEffect, useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { get } from "http";
import { getRecipes } from "@/services/getRecipes";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeDisplay = () => {
 const [searchTerm, setSearchTerm] = useState("Eggs");
 const [recipes, setRecipes] = useState([]);
 const [loading, setLoading] = useState(false);

 const handleSearch = (searchKey: string) => {
    setSearchTerm(searchKey);
 }

 useEffect(() => {
    if(searchTerm) {
        listRecipes(searchTerm);
    }
 }, [searchTerm]);

 const listRecipes = async (searchKey: string) => {
    setLoading(true);
    try{
        const response = await getRecipes(searchKey);
        setRecipes(response.hits);
        console.log(response);
    }catch(error) { 
        console.error("Error fetching recipes:", error);
    } finally {
        setLoading(false);
    }
}

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
        {loading ? (
          <div className="flex justify-center items-center mt-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : recipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {recipes.map((recipe: any, index: number) => (
              <RecipeCard key={index} recipe={recipe.recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center mt-12">
            <p className="text-gray-500 text-lg">No recipes found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDisplay;