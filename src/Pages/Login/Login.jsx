import { Container, Wrapper, Title, Form, Input, Button, Link,  } from "./Login.styles";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREAT ACCOUNT</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>LOGIN</Button>
          <Link>DO NOT REMEMBER YOUR PASSWORD ?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
