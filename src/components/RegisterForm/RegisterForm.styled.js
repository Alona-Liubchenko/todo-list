import styled from 'styled-components';

export const Forma = styled.form`
  display: flex;
  //   margin: 0 auto;
  width: 45%;
  align-items: center;

  justify-content: center;
  flex-wrap: wrap;
  background-color: #ddb7b7;
  padding: 24px;
  border-radius: 20px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 24px;
  font-weight: 500;
`;
export const Input = styled.input`
  border-radius: 10px;
  padding: 5px 15px;
  font-size: 18px;
  font-weight: 500;
  flex-wrap: wrap;
  box-shadow: rgb(0 0 0 / 55%) 10px 10px 5px 0px;
  height: 100%;
  width: 90%;
  margin: 15px 0;
  outline: none;
  cursor: pointer;
  &:hover,
  &:focus {
    border-color: blue;
  }
`;
export const Btn = styled.button`
  width: 150px;
  height: 30px;
  margin-top: 20px;
  background: #65ebff4d;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-color: #0e0e9c;
  box-shadow: rgb(0 0 0 / 55%) 10px 10px 5px 0px;
  cursor: pointer;
  &:hover,
  &:focus {
    border-color: blue;
    background-color: #6363e7d4;
  }
`;
