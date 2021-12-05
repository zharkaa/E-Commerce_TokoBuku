import { Send } from "@material-ui/icons";
import { Container, Title, Desc, InputContainer, Input, Button} from './Newsletter.styles'

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely update</Desc>
      <InputContainer>
        <Input placeholder="Your email"/>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;
