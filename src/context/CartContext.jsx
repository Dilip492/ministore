
import React, { createContext, useState, useContext , useMemo} from 'react';

// Create context
export const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [count, setcount] = useState(null);

    // Add to cart function
    const addToCart = (item, type) => {
        setcount(count + 1); // Increment count

        // Check if the product or watch is already in cart
        const existingIndex = cart.findIndex((cartItem) => cartItem.id === item.id && cartItem.type === type);

        if (existingIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, type, quantity: 1 }]);
        }
    };

    // Remove from cart function (optional)
    // const removeFromCart = (productId) => {
    //     setcount(count-1)
    //     const updatedCart = cart.filter(item => item.id !== productId);q
    //     setCart(updatedCart);
    // };
    const removeFromCart = (productId) => {
        setcount(count - 1)
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };

    // Clear cart function (optional)
    const clearCart = () => {
        setCart([]);
    };

    const subtotal = useMemo(() => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, count , subtotal }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use CartContext
export const useCart = () => {
    return useContext(CartContext);
};
