import { useEffect, useState } from "react";
// import dataProduct from "../../fixture/dataProduct.json";
import Product from "../Product/Product";
import { Container } from "./Products.styles";
import axios from "axios";

const Products = ({ catg, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // GET ALL PRODUCT
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          catg
            ? `http://localhost:5000/api/products?category=${catg}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [catg]);

  // FILTER COLOR AND SIZE
  useEffect(() => {
    catg &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [catg, products, filters]);

  // SORT
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.createdAt - a.createdAt)
      );
    }
  }, [sort]);

  return (
    <Container>
      {catg
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
