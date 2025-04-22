import styled from 'styled-components';

export const StyledLoginContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

export const ErrorMessage = styled.p`
  color: #dc3545;
  margin-bottom: 15px;
`;

export const StyledWrapper = styled.div`
  margin-bottom: 20px;
`;

export const StyledLogin = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const LoginButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
