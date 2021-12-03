import styled from "styled-components";
import dataCateg from "../fixture/dataCategories.json";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-space-between;
`;

const Categories = () => {
  return (
    <Container>
      {dataCateg.map((item) => (
        <CategoryItem item={item} key={item}/>
      ))}
    </Container>
  );
};

export default Categories;
