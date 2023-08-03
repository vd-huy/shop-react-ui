import { styled } from "styled-components";
import { mobile } from "../responsive";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://toigingiuvedep.vn/wp-content/uploads/2021/06/anh-galaxy-lung-linh-huyen-ao.jpg")
      center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  ${mobile({
    width: "75%",
  })}
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const From = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  margin: 10px 0;
`;

const Optionlink = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>SIGN IN</Title>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Close />
          </Link>
        </Header>
        <From>
          <Input placeholder="user name" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Optionlink>DO NOT YOUR REMEMBER THE PASSWORD?</Optionlink>
          <Optionlink>CREATE A ACCOUNT</Optionlink>
        </From>
      </Wrapper>
    </Container>
  );
};

export default Login;
