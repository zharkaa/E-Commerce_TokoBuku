import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  Button,
} from "./Register.styles";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREAT ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="Last name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By Creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
