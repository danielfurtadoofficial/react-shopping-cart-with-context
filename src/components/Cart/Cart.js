import { useContext } from "react";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const addItemHandler = (item) => {
    cartCtx.addItem(item);
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.amount,
              total: item.amount * item.price,
              price: item.price,
            }}
            onAddItem={() => addItemHandler({ ...item, amount: 1 })}
            onRemoveItem={() => removeItemHandler(item.id)}
          />
        ))}
      </ul>
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
    </Card>
  );
};

export default Cart;
