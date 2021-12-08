import { mobile } from "../../responsive";
import styled from "styled-components";

export const Container = styled.div`

`;

export const Title = styled.h1`
  margin: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Filter = styled.div`
  margin: 20px;
  ${mobile({
    width: "0px 20px",
    display: "flex",
    flexDirection: "column",
  })}
`;

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
  ${mobile({ margin: "0px" })}
`;
export const Select = styled.select`
  padding: 5px;
  height: 30px;
  width: 100px;
  margin: 20px 20px 20px 0px;

  ${mobile({ margin: "7px 0px" })}
`;
export const Option = styled.option``;
