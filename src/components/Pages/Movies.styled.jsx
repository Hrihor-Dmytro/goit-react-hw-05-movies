import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormElement = styled(Form)`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
`;
export const FormField = styled(Field)`
  width: 300px;
  height: 20px;
  border-radius: 10px;
  border: 2px solid #000000;
  outline-color: #009dff;
  padding: 10px;
  font-weight: 500;
  font-size: 20px;
  color: #000000;
  &::placeholder {
    color: #000000;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 120px;
  height: 45px;
  position: relative;
  border: 0;
  opacity: 0.6;
  border: 2px solid #000000;
  border-radius: 10px;
  background-color: #0095ff;
  color: #000000;
  cursor: pointer;
  outline: none;
  font-weight: 500;
  font-size: 20px;
`;

export const InfoHeader = styled.p`
  margin-top: 30px;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-left: 10px;
  color: #ff0000;
`;

export const MainBox = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
`;
