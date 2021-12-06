import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid #e9e9e9;
`;
export const Title = styled.h1`
  font-size: 70px;
  margin: 20px;
`;
export const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
export const InputContainer = styled.div`
  width: 50%;
  height: 44px;
  background-color: white;
  display: flex;
  border: none;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  outline: none;

`;
export const Button = styled.button`
  flex: 0.5;
  padding-top: 5px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
