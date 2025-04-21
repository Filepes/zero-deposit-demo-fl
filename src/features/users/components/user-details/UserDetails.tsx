import { useNavigate } from 'react-router-dom';
import {
  StyledBackButton,
  StyledButtonsWrapper,
  StyledUserDetailsInfo,
  StyledUserDetailsInfoItem,
  StyledUserDetailsInfoLabel,
  StyledUserDetailsContainer,
  StyledUserDetailsInfoWrapper,
  StyledUserDetailsInfoWrapperBody,
  StyledUserDetailsInfoWrapperTitle,
  StyledUserDetailsWrapper,
} from './UserDetails.styled';
import { useGetUser } from './hooks/useGetUser';

export const UserDetails = () => {
  const navigate = useNavigate();
  const { user, loading } = useGetUser();

  if (loading)
    return <StyledUserDetailsContainer>Loading...</StyledUserDetailsContainer>;
  if (!user)
    return (
      <StyledUserDetailsContainer>User not found</StyledUserDetailsContainer>
    );

  return (
    <StyledUserDetailsContainer>
      <StyledUserDetailsWrapper>
        <StyledButtonsWrapper>
          <StyledBackButton onClick={() => navigate('/users')}>
            Back to Users
          </StyledBackButton>
        </StyledButtonsWrapper>
        <StyledUserDetailsInfoWrapper>
          <StyledUserDetailsInfoWrapperTitle>
            User Details
          </StyledUserDetailsInfoWrapperTitle>
          <StyledUserDetailsInfoWrapperBody>
            <StyledUserDetailsInfo>
              <StyledUserDetailsInfoItem>
                <StyledUserDetailsInfoLabel>
                  Username:
                </StyledUserDetailsInfoLabel>
                {user.username}
              </StyledUserDetailsInfoItem>
            </StyledUserDetailsInfo>
            <StyledUserDetailsInfo>
              <StyledUserDetailsInfoItem>
                <StyledUserDetailsInfoLabel>Role:</StyledUserDetailsInfoLabel>
                {user.role}
              </StyledUserDetailsInfoItem>
            </StyledUserDetailsInfo>
          </StyledUserDetailsInfoWrapperBody>
        </StyledUserDetailsInfoWrapper>
      </StyledUserDetailsWrapper>
    </StyledUserDetailsContainer>
  );
};
