import { useContext } from 'react';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import CartContext from '../store/cart-context';

const ProductItem = (props) => {
  const { title, price, description } = props;

  const cartCtx = useContext(CartContext); 
  const addToCartHandler = () => {
    cartCtx.addItem({id: props.id, title: title, description: description, price: price, amount: 1});
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
