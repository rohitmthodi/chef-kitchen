import { useCartContext } from "../Contexts/CartContext";
import { useProduct } from "../Contexts/ProductContext";
import { useCategory } from "../Contexts/CategoryContext";

const MenuCard = () => {
  const {
    cart,
    searchQuery,
    activeTab,
    selectedSizes,
    handleSizeChange,
    addToCart,
  } = useCartContext();
  const { products } = useProduct(); // DASHBOARD PRODUCTS
  const { categories } = useCategory(); // DASHBOARD CATEGORIES

  const filteredMenu = products.filter((item) => {
    if (activeTab !== "all" && item.category !== activeTab) return false;
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="md:px-3 sm:px-4 font-barlow pb-24">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10">
        {filteredMenu.map((item) => {
          const currentSize =
            selectedSizes.find((s) => s.id === item.id)?.size || "small";
          const price = item.prices?.[currentSize] || 0;
          const isAdded = cart.some(
            (c) => c.id === item.id && c.size === currentSize,
          );

          return (
            <div
              key={item.id}
              className="bg-[#1F1D2B] rounded-xl mt-16 sm:mt-20 p-4 text-center pb-8"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-30 md:h-30 mx-auto -mt-16 sm:-mt-20 rounded-full object-cover"
              />

              <p className="text-white mt-4 text-xs sm:text-base whitespace-normal md:truncate">
                {item.name}
              </p>
              <div className="mt-2 flex gap-3 items-center justify-center text-sm sm:text-base truncate">
                <span className="text-green-500">₹ {price}</span>
              </div>

              <span className="text-gray-400">{item.stock} Bowls available</span>

              <div className="flex justify-center gap-2 mt-3 md:gap-3">
                {["small", "medium", "large"].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeChange(item.id, size)}
                    className={`rounded text-xs md:text-sm px-2 py-1 md:px-3 md:py-2 ${
                      currentSize === size
                        ? "bg-[#F99147] text-white"
                        : "text-white"
                    }`}
                  >
                    {size[0].toUpperCase()}
                  </button>
                ))}
              </div>

              <button
                onClick={() => addToCart(item, currentSize)}
                className={`mt-3 sm:mt-4 px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm md:text-base ${
                  isAdded
                    ? "bg-green-600 text-white"
                    : "bg-[#F99147] text-white"
                }`}
              >
                {isAdded ? "Added ✔" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuCard;
