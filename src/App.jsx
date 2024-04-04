import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [productData, setProductData] = useState([]);
  const [formData, setFormData] = useState({ id: "", title: "", price: "" });

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10&skip=10&select=title,price")
      .then((res) => res.json())
      .then((data) => setProductData(data.products));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductData([...productData, formData]);
    setFormData({ id: "", title: "", price: "" });
  };

  return (
    <div className="App">
      <div>
        <h1>Title</h1>
        {productData.map((product) => {
          return (
            <div key={product.id}>
              <p>{product.title}</p>
            </div>
          );
        })}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <p>
            Id:
            <input
              onChange={(event) =>
                setFormData({ ...formData, id: event.target.value })
              }
              value={formData?.id}
            ></input>
          </p>
          <p>
            Title:
            <input
              onChange={(event) =>
                setFormData({ ...formData, title: event.target.value })
              }
              value={formData?.title}
            ></input>
          </p>
          <p>
            Cost:
            <input
              onChange={(event) =>
                setFormData({ ...formData, price: event.target.value })
              }
              value={formData?.price}
            ></input>
          </p>
          <br />
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
}
