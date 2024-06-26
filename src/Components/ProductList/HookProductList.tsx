import Styles from "./ProductList.module.css";
import Product from "../Product/Product";
import { useProducts, useProductsActions } from "../Providers/ProductProvider";

const HookProductList = () => {
  const products = useProducts();
  const dispatch = useProductsActions();

  const renderProducts = () => {
    if (products.length === 0) return <h1>there is no products in cart</h1>;
    return (
      <div className={Styles.products}>
        <h1>Products List</h1>
        {products.map((product) => {
          return (
            <Product
              increment={() => dispatch({ type: "increment", id: product.id })}
              dicrement={() => dispatch({ type: "decrement", id: product.id })}
              product={product}
              key={product.id}
              onDelete={() => dispatch({ type: "remove", id: product.id })}
            />
          );
        })}
      </div>
    );
  };

  return <>{renderProducts()}</>;
};

export default HookProductList;
