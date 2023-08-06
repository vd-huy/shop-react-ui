import { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fcf1ed;
  height: 80px;
`;

const Nav = styled.div`
  display: flex;
  text-transform: uppercase;
  flex: 8;
  color: black;
  justify-content: space-around;
  align-items: center;
`;

const Navitem = styled.div`
  text-align: center;
  padding: 10px;
  border: ${(props) => (props.desc === props.active ? "1px solid" : "none")};
  border-image-slice: 1;
  border-width: 2px;
  border-image-source: linear-gradient(50deg, #503aca 0%, #ea34ff 100%);
  &:hover {
    cursor: pointer;
  }
`;

function Menu() {
  const [active, setActive] = useState("home");
  const handleClick = (desc) => {
    switch (desc) {
      case "home":
        setActive("home");
        break;
      case "about":
        setActive("about");
        break;
      case "product":
        setActive("product");
        break;
      case "news":
        setActive("news");
        break;
      case "pages":
        setActive("pages");
        break;
      case "contact":
        setActive("contact");
        break;
      default:
        console.log(desc);
        break;
    }
  };
  return (
    <Container>
      {/* <Logo src="https://i.ibb.co/gDs1Dgf/logo.png" /> */}
      <Nav>
        <Navitem
          onClick={() => handleClick("home")}
          active={active}
          desc="home"
        >
          Home
        </Navitem>
        <Navitem
          onClick={() => handleClick("about")}
          active={active}
          desc="about"
        >
          About
        </Navitem>
        <Navitem
          onClick={() => handleClick("product")}
          active={active}
          desc="product"
        >
          Product
        </Navitem>
        <Navitem
          onClick={() => handleClick("news")}
          active={active}
          desc="news"
        >
          News
        </Navitem>
        <Navitem
          onClick={() => handleClick("pages")}
          active={active}
          desc="pages"
        >
          Pages
        </Navitem>
        <Navitem
          onClick={() => handleClick("contact")}
          active={active}
          desc="contact"
        >
          Contact
        </Navitem>
      </Nav>
    </Container>
  );
}

export default Menu;
