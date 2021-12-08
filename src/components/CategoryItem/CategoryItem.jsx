import { NavLink } from "react-router-dom";
import { Container, Image, Info, Title, Button } from "./CategoryItem.styles";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <NavLink to={`/products/${item.catg}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </NavLink>
    </Container>
  );
};

export default CategoryItem;
