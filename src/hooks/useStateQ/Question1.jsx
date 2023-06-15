import { useState } from "react";

const Question1 = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addItemToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCart);
    } else {
      const updatedCart = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(updatedCart);
    }
  };

  // Function to remove items from the cart
  const removeItemFromCart = (itemId) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === itemId) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });

    setCartItems(updatedCart.filter((cartItem) => cartItem.quantity > 0));
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate the total number of items in the cart
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div>
      <div className="w-full px-6 py-6 text-lg leading-loose">
        Question 1: <br />
        You are building a simple e-commerce application. Each product has a
        quantity, and the user can add or remove items from their cart.
        Implement the functionality to manage the cart using the useState hook.
        The cart should keep track of the total number of items and the total
        price. Additionally, provide a button to clear the cart, which should
        reset the state. <br /> <br />
        Hints: <br />
        ■ Use an array to store the items in the cart, where each item is an
        object with properties like id, name, price, and quantity.
        <br />
        ■ Use the useState hook to manage the cart state.
        <br />
        ■ Create functions to add items to the cart, remove items from the cart,
        and clear the cart.
        <br />
      </div>
      <div className="w-full px-6 py-6 text-lg leading-loose mx-auto grid place-items-center">
        <h2 className="text-2xl">Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li
                className="w-auto bg-gray-100 rounded px-4 py-2 text-slate-900 my-2 space-x-4 flex justify-center font-bold items-center"
                key={item.id}
              >
                <p>
                  {item.name}{" "}
                  <span className="mx-6"> Quantity: {item.quantity}</span>{" "}
                  <span className="mx-6"> ${item.price * item.quantity}</span>
                </p>
                <button
                  className="w-30 bg-red-900 rounded px-4 py-2 text-white"
                  onClick={() => removeItemFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="flex justify-center items-center w-full space-x-5 text-xl my-10">
          <p className="w-30 bg-pink-900 rounded px-4 py-2 text-white">
            Total Items: {totalItems}
          </p>
          <p className="w-30 bg-purple-900 rounded px-4 py-2 text-white">
            Total Price: ${totalPrice}
          </p>
        </div>

        <div className="flex justify-center items-center w-full space-x-5 text-xl my-10">
          <button
            className="w-30 bg-slate-900 rounded px-4 py-2 text-white"
            onClick={clearCart}
          >
            Clear Cart
          </button>
          <button
            className="w-30 bg-green-900 rounded px-4 py-2 text-white"
            onClick={() =>
              addItemToCart({ id: 1, name: "Item 1", price: 10, quantity: 1 })
            }
          >
            Add Item 1
          </button>
          <button
            className="w-30 bg-blue-900 rounded px-4 py-2 text-white"
            onClick={() =>
              addItemToCart({ id: 2, name: "Item 2", price: 15, quantity: 1 })
            }
          >
            Add Item 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question1;
