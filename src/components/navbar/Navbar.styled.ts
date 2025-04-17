import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
  margin-bottom: 1rem;
`;

export const StyledHome = styled(Link)`
  font-weight: bold;
  text-decoration: none;
`;

export const StyledNavLinksWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const StyledUsernameSpan = styled.span``;

export const StyledLogoutButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #dc3545;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;
