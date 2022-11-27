import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormElement = styled(Form)`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
  border: #0095ff;
`;
export const FormField = styled(Field)`
  width: 300px;
  height: 20px;
  border-radius: 15px;
  border: #0095ff;
  outline-color: #009dff;
  border: none;
  padding: 10px;
  font-weight: 500;
  font-size: 20px;
  color: #00aeff;
`;

export const Button = styled.button`
  display: inline-block;
  width: 120px;
  height: 40px;
  position: relative;
  border: 0;
  opacity: 0.6;
  border: #0095ff;
  border-radius: 15px;
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
  color: #570434;
`;
