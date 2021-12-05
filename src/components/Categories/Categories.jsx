import dataCateg from "../../fixture/dataCategories.json";
import CategoryItem from "../CategoryItem/CategoryItem";
import { Container } from "./Categories.styles";

const Categories = () => {
  return (
    <Container>
      {dataCateg.map((item) => (
        <CategoryItem item={item} key={item} />
      ))}
    </Container>
  );
};

export default Categories;
