import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 60px;
  ${mobile({ height: "70px" })}
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
  /* background-color: blue; */
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
export const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

export const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: "20px", 
    marginLeft: "15px",
    marginRight: "0px"
  })}
  /* background-color: red; */
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 4px 25px 5px 15px;
  ${mobile({ 
    fontSize: "10px",
    margin: "7px 15px 15px 7px"
  })}

  /* background-color: yellow; */
`;