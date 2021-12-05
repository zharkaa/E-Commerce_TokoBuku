import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
} from "@material-ui/icons";

import {
  Container,
  Left,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Center,
  Title,
  List,
  ListItem,
  Right,
  ContactItem,
  Payment
} from "./Footer.styles";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>TEST</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          similique, deleniti deserunt vitae beatae excepturi quasi laudantium
          quaerat fugiat quia voluptas quam, repudiandae sint nihil at. Ipsa
          voluptatum iure nostrum?
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Kembes
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +62 1231231231
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@test.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
