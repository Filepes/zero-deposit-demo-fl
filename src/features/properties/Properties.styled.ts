import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledPropertiesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledPropertiesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledTitle = styled.h1`
  margin-bottom: 0;
  color: #333;
`;

export const StyledFilterContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledFilterWrapper = styled.div`
  margin: 0;
  min-width: 150px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledAddButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  background-color: #28a745;
  color: white;
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

export const StyledButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
