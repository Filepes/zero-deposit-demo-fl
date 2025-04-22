import { useNavigate } from 'react-router-dom';
import {
  StyledPropertyDetailsContainer,
  StyledPropertyDetailsWrapper,
  StyledPropertyDetailsInfoWrapper,
  StyledPropertyDetailsInfoWrapperTitle,
  StyledPropertyDetailsInfoWrapperBody,
  StyledPropertyPrice,
  StyledPropertyInfo,
  StyledPropertyInfoItem,
  StyledPropertyInfoLabel,
  StyledText,
  StyledButtonsWrapper,
  StyledBackButton,
} from './PropertyDetails.styled';
import { useGetProperty } from './hooks/useGetProperty';

export const PropertyDetails = () => {
  const navigate = useNavigate();
  const { property, loading } = useGetProperty();

  if (loading)
    return (
      <StyledPropertyDetailsContainer>
        Loading...
      </StyledPropertyDetailsContainer>
    );
  if (!property)
    return (
      <StyledPropertyDetailsContainer>
        Property not found
      </StyledPropertyDetailsContainer>
    );

  return (
    <StyledPropertyDetailsContainer>
      <StyledPropertyDetailsWrapper>
        <StyledButtonsWrapper>
          <StyledBackButton onClick={() => navigate('/properties')}>
            Back to Properties
          </StyledBackButton>
        </StyledButtonsWrapper>
        <StyledPropertyDetailsInfoWrapper>
          <StyledPropertyDetailsInfoWrapperTitle>
            Property Details
          </StyledPropertyDetailsInfoWrapperTitle>
          <StyledPropertyDetailsInfoWrapperBody>
            <StyledPropertyPrice>{property.price} $</StyledPropertyPrice>
            <StyledPropertyInfo>
              <StyledPropertyInfoItem>
                <StyledPropertyInfoLabel>Rooms:</StyledPropertyInfoLabel>
                {property.num_rooms}
              </StyledPropertyInfoItem>
            </StyledPropertyInfo>
            <StyledPropertyInfoItem>
              <StyledPropertyInfoLabel>Address:</StyledPropertyInfoLabel>
              <StyledText>{property.address}</StyledText>
            </StyledPropertyInfoItem>
          </StyledPropertyDetailsInfoWrapperBody>
        </StyledPropertyDetailsInfoWrapper>
      </StyledPropertyDetailsWrapper>
    </StyledPropertyDetailsContainer>
  );
};
