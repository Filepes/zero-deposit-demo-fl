import {
  StyledNav,
  StyledUsernameSpan,
  StyledNavLinksWrapper,
  StyledHome,
  StyledLogoutButton,
  StyledLink,
} from './Navbar.styled';
import { useAuth } from 'context';

export const Navbar = () => {
  const { user, logout, isAdmin } = useAuth();
  return (
    <StyledNav>
      <div>
        <StyledHome to="/properties">Home</StyledHome>
      </div>
      <StyledNavLinksWrapper>
        {user && (
          <>
            {isAdmin() && <StyledLink to="/users">Manage Users</StyledLink>}
            <StyledUsernameSpan>{user.username}</StyledUsernameSpan>
            <StyledLogoutButton onClick={logout}>Logout</StyledLogoutButton>
          </>
        )}
      </StyledNavLinksWrapper>
    </StyledNav>
  );
};
