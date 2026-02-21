const RecipeCard = ({ recipe }: { recipe: any }) => {
  return (
    <a
      href={recipe.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-pointer bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border border-gray-100"
    >
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.label}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-md">
          {Math.round(recipe.calories / recipe.yield)} cal
        </div>
        <div className="absolute bottom-3 left-3 text-white">
          <h2 className="text-lg font-bold line-clamp-2 leading-tight drop-shadow-lg">{recipe.label}</h2>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          {recipe.ingredientLines?.length || 0} ingredients
        </div>
        <div className="bg-primary text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-primary/90 transition-colors">
          View Full Recipe
        </div>
      </div>
    </a>
  );
};

export default RecipeCard;