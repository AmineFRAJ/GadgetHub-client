import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import { ShoppingBasket } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "../JS/Actions/AddToCartAction";
import { Trash } from "lucide-react";

const Panier = () => {
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state) => state.CartReducer.cartItems);
  const [placement] = useState("right");
  const dispatch = useDispatch();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (_id) => {
    dispatch(removeFromCart(_id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Space>
        <Link onClick={showDrawer}>
          <ShoppingBasket aria-hidden="true" className="h-6 w-6" />
        </Link>
      </Space>
      <Drawer
        title="Your Shopping Cart"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={handleClearCart} disabled={cartItems.length === 0}>
              Clear Cart
            </Button>
            <Button onClick={onClose}>Close</Button>
          </Space>
        }
      >
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item._id} className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-4">
                    <img
                      alt={item.model}
                      src={item.image}
                      className="h-10 w-10 object-cover rounded-full"
                    />
                    <h4>{item.model}</h4>
                    <p className="text-emerald-600 font-semibold">${item.price}</p>
                  </div>
                  <span>Quantity: {item.quantity}</span>
                  <button
                    className="text-red-400 hover:text-red-300"
                    onClick={() => handleRemoveItem(item._id)}
                  >
                    <Trash />
                  </button>
                </li>
               
              ))}
            </ul>

            {/* Total */}
               <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t shadow-lg">
              <div className="flex justify-between items-center">
                <span className="font-bold">Total:</span>
                <span className="font-bold text-emerald-600">${totalPrice.toFixed(2)}</span>
              </div>
              <Button
                className="mt-4 w-full"
                type="primary"
                disabled={cartItems.length === 0}
              >
                Buy Now
              </Button>
            </div>

          
          </>
        )}
      </Drawer>
    </>
  );
};

export default Panier;
