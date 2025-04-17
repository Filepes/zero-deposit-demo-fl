import { Link } from 'react-router-dom';
import {
  StyledNav,
  StyledUsernameSpan,
  StyledNavLinksWrapper,
  StyledHome,
  StyledLogoutButton,
} from './Navbar.styled';
import { useAuth } from 'context';

export const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <StyledNav>
      <div>
        <StyledHome to="/properties">Home</StyledHome>
      </div>
      <StyledNavLinksWrapper>
        {user ? (
          <>
            <StyledUsernameSpan>{user.username}</StyledUsernameSpan>
            <StyledLogoutButton onClick={logout}>Logout</StyledLogoutButton>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </StyledNavLinksWrapper>
    </StyledNav>
  );
};
