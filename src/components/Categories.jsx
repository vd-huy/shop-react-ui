import { styled } from "styled-components";
import { categories } from "../data";
import CategoryItems from "./CategoryItems";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({
    padding: "0",
    flexDirection: "column",
  })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItems item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
