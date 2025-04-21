import styled from 'styled-components';

export const StyledUserDetailsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledUserDetailsWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const StyledUserDetailsInfoWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  margin-top: 20px;
  background-color: white;
`;

export const StyledUserDetailsInfoWrapperTitle = styled.h3`
  margin-bottom: 15px;
  color: #333;
`;

export const StyledUserDetailsInfoWrapperBody = styled.div`
  margin-bottom: 10px;
`;

export const StyledUserDetailsInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

export const StyledUserDetailsInfoItem = styled.div`
  flex: 1;
  min-width: 200px;
`;

export const StyledUserDetailsInfoLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const StyledBackButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  background-color: #6c757d;
  color: white;
`;
