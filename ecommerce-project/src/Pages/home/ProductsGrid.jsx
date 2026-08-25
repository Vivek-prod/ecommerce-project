import { Product } from "./Product";

export function ProductsGrid({ products, checkmark, loadCart }) {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            loadCart={loadCart}
            checkmark={checkmark}
          />
        );
      })}
    </div>
  );
}
