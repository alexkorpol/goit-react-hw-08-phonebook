import styled from "styled-components"

export const Form = styled.form``;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;
export const ContainerBox = styled.div`
  position: relative;
`;

export const Title = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: blue;
  text-align: center;
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  :focus,
  :valid {
    top: -20px;
    left: 0;
    color: blue;
  }
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: blue;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;
  background: transparent;
  :hover {
    background: blue;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px blue, 0 0 25px blue, 0 0 50px blue, 0 0 100px blue;
  }
`;

