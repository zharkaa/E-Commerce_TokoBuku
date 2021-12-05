import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";
import { Container, Image, Circle, Info, Icon } from "./Product.styles";

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
