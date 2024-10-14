import { Link } from "react-router-dom";

const CategoryItem = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-x-2">  
      {/* Smartphone */}
      <div className="relative overflow-hidden h-96 w-full md:w-1/3 rounded-lg group mb-6 md:mb-0">
        <Link to="products/smartphone">
          <div className="w-full h-full cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50 z-10" />
            <img
              src="https://www.ossia.com/hubfs/7-Modern-Smartphones.jpg"
              alt="smartphone"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
              <h3 className="text-white text-2xl font-bold mb-2">Smartphone</h3>
              <p className="text-gray-200 text-sm">Explore Smartphones</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Laptop */}
      <div className="relative overflow-hidden h-96 w-full md:w-1/3 rounded-lg group mb-6 md:mb-0">
        <Link to="products/laptops">
          <div className="w-full h-full cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50 z-10" />
            <img
              src="https://cdn.thewirecutter.com/wp-content/media/2024/07/businesslaptops-2048px-233284-3x2-1.jpg?auto=webp&quality=75&crop=4:3,smart&width=1024"
              alt="laptops"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
              <h3 className="text-white text-2xl font-bold mb-2">Laptops</h3>
              <p className="text-gray-200 text-sm">Explore Laptops</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Tablets */}
      <div className="relative overflow-hidden h-96 w-full md:w-1/3 rounded-lg group">
        <Link to="products/tablet">
          <div className="w-full h-full cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50 z-10" />
            <img
              src="https://static.independent.co.uk/2024/04/05/13/best%20tablets.png"
              alt="Tablets"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
              <h3 className="text-white text-2xl font-bold mb-2">Tablets</h3>
              <p className="text-gray-200 text-sm">Explore Tablets</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
