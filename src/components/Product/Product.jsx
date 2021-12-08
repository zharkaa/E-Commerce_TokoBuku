import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
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
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
