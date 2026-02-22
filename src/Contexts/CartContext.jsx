// import { createContext, useContext, useEffect, useState } from "react";
// import { SidebarItems } from "../Constants";

// const CartContext = createContext(null);

// export const AppProvider = ({ children }) => {
//   // 🛒 Load cart from localStorage on first render
//   const [cart, setCart] = useState(() => {
//     const savedCart = localStorage.getItem("cart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [orderType, setOrderType] = useState("Dine In");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeTab, setActiveTab] = useState("all");
//   const [activeMenu, setActiveMenu] = useState(SidebarItems[1]);
//   const [selectedSizes, setSelectedSizes] = useState([]);

//   const [showReceipt, setShowReceipt] = useState(false);
//   const [orderDateTime, setOrderDateTime] = useState(null);
//   const [orderPlaced, setOrderPlaced] = useState(false);

//   // 💾 Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // ✅ GLOBAL TIMER FOR ORDER SUCCESS POPUP
//   useEffect(() => {
//     if (!orderPlaced) return;

//     const timer = setTimeout(() => {
//       setOrderPlaced(false); // hide popup after 3 seconds
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, [orderPlaced]);

//   const onCartOpen = () => setIsCartOpen(true);
//   const onCartClose = () => setIsCartOpen(false);

//   const handleSizeChange = (id, size) => {
//     setSelectedSizes((prev) => {
//       const exists = prev.find((item) => item.id === id);
//       if (exists) {
//         return prev.map((item) => (item.id === id ? { ...item, size } : item));
//       }
//       return [...prev, { id, size }];
//     });
//   };

//   const addToCart = (item, size) => {
//     const priceMap = {
//       small: item.prices?.small || 0,
//       medium: item.prices?.medium || 0,
//       large: item.prices?.large || 0,
//     };

//     const price = priceMap[size];
//     if (!price) return;

//     setCart((prev) => {
//       const index = prev.findIndex((c) => c.id === item.id && c.size === size);

//       if (index !== -1) {
//         return prev.map((c, i) =>
//           i === index ? { ...c, quantity: c.quantity + 1 } : c
//         );
//       }

//       return [
//         ...prev,
//         {
//           id: item.id,
//           name: item.name,
//           size,
//           price,
//           image: item.image,
//           quantity: 1,
//         },
//       ];
//     });
//   };

//   const openReceipt = (dateTime = new Date()) => {
//     setOrderDateTime(dateTime);
//     setShowReceipt(true);
//   };

//   const closeReceipt = () => setShowReceipt(false);

//   const confirmOrder = () => {
//     setOrderPlaced(true);   // 🔥 triggers popup
//     setCart([]);
//     localStorage.removeItem("cart");
//     setShowReceipt(false);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         setCart,
//         isCartOpen,
//         onCartOpen,
//         onCartClose,
//         orderType,
//         setOrderType,
//         searchQuery,
//         setSearchQuery,
//         activeTab,
//         setActiveTab,
//         activeMenu,
//         setActiveMenu,
//         selectedSizes,
//         setSelectedSizes,
//         handleSizeChange,
//         addToCart,
//         showReceipt,
//         orderDateTime,
//         orderPlaced,
//         openReceipt,
//         closeReceipt,
//         confirmOrder,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Safe hook
// export const useCartContext = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCartContext must be used inside AppProvider");
//   }
//   return context;
// };

// export default CartContext;

import { createContext, useContext, useEffect, useState } from "react";
import { SidebarItems } from "../Constants";

const CartContext = createContext(null);

export const AppProvider = ({ children }) => {
  // 🛒 Load cart from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderType, setOrderType] = useState("Dine In");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [activeMenu, setActiveMenu] = useState(SidebarItems[1]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  // 🧾 Receipt
  const [showReceipt, setShowReceipt] = useState(false);
  const [orderDateTime, setOrderDateTime] = useState(null);

  // 💳 Payment
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);

  // ✅ Order Success
  const [orderPlaced, setOrderPlaced] = useState(false);

  // 💾 Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ⏱ Auto-hide success popup
  useEffect(() => {
    if (!orderPlaced) return;
    const timer = setTimeout(() => setOrderPlaced(false), 3000);
    return () => clearTimeout(timer);
  }, [orderPlaced]);

  const onCartOpen = () => setIsCartOpen(true);
  const onCartClose = () => setIsCartOpen(false);

  const handleSizeChange = (id, size) => {
    setSelectedSizes((prev) => {
      const exists = prev.find((item) => item.id === id);
      if (exists) {
        return prev.map((item) =>
          item.id === id ? { ...item, size } : item
        );
      }
      return [...prev, { id, size }];
    });
  };

  const addToCart = (item, size) => {
    const priceMap = {
      small: item.prices?.small || 0,
      medium: item.prices?.medium || 0,
      large: item.prices?.large || 0,
    };

    const price = priceMap[size];
    if (!price) return;

    setCart((prev) => {
      const index = prev.findIndex(
        (c) => c.id === item.id && c.size === size
      );

      if (index !== -1) {
        return prev.map((c, i) =>
          i === index ? { ...c, quantity: c.quantity + 1 } : c
        );
      }

      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          size,
          price,
          image: item.image,
          quantity: 1,
        },
      ];
    });
  };

  // 🧾 Receipt controls
  const openReceipt = (dateTime = new Date()) => {
    setOrderDateTime(dateTime);
    setShowReceipt(true);
  };

  const closeReceipt = () => setShowReceipt(false);

  // 👉 Receipt → Payment
  const confirmOrder = () => {
    setShowReceipt(false);
    setShowPayment(true);
  };

  // 💳 Payment controls
  const closePayment = () => setShowPayment(false);

  const completeOrder = (method) => {
    setPaymentMethod(method);
    setOrderPlaced(true);
    setCart([]);
    localStorage.removeItem("cart");
    setShowPayment(false);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        isCartOpen,
        onCartOpen,
        onCartClose,
        orderType,
        setOrderType,
        searchQuery,
        setSearchQuery,
        activeTab,
        setActiveTab,
        activeMenu,
        setActiveMenu,
        selectedSizes,
        setSelectedSizes,
        handleSizeChange,
        addToCart,

        // Receipt
        showReceipt,
        orderDateTime,
        openReceipt,
        closeReceipt,
        confirmOrder,

        // Payment
        showPayment,
        closePayment,
        completeOrder,
        paymentMethod,

        // Order
        orderPlaced,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Safe hook
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used inside AppProvider");
  }
  return context;
};

export default CartContext;
