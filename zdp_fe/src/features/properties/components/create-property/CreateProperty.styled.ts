import styled from 'styled-components';
import { ErrorMessage } from 'formik';

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 40px auto;
`;

export const StyledFormTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

export const StyledFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  font-weight: 500;
  margin-bottom: 6px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
  font-size: 13px;
  margin-top: 4px;
`;

export const StyledSubmitButton = styled.button`
  padding: 12px;
  font-size: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;

export const StyledCancelButton = styled(StyledSubmitButton)`
  background-color: #6c757d;
  color: white;
`;
