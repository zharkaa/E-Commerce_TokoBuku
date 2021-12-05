import dataProduct from "../../fixture/dataProduct.json";
import Product from "../Product/Product";
import { Container } from "./Products.styles";

const Products = () => {
  return (
    <Container>
      {dataProduct.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
