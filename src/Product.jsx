import { useState } from "react";

const Product = ({ ProductData }) => {
  const [CurrentProduct, SetCurrentProduct] = useState(ProductData);

  return (
    <div>
      <div>
        <h1>Title</h1>
        {CurrentProduct.map((product) => {
          return (
            <div>
              <p>{product.title}</p>
            </div>
          );
        })}
      </div>
      <div>
        <form>
          <button
            onClick={() =>
              SetCurrentProduct([
                ...CurrentProduct,
                { id: "22222", title: "Sachin Tiwari", price: "costly" },
              ])
            }
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};
export default Product;
