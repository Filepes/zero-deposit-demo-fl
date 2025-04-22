import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledUsersContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledUsersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledTitle = styled.h1`
  margin-bottom: 0;
  color: #333;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledAddUserButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  background-color: #28a745;
  color: white;
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledViewButton = styled.button`
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;
