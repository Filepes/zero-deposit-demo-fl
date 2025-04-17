import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledLoginContainer,
  StyledTitle,
  Select,
  StyledLogin,
  StyledWrapper,
  StyledButtonWrapper,
  ErrorMessage,
  LoginButton,
} from './Login.styled';
import { useAuth } from 'context';

export const Login = () => {
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async () => {
    console.log('da');
    try {
      await login(role as 'user' | 'admin');
      navigate('/home');
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <StyledLoginContainer>
      <StyledTitle>Login</StyledTitle>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <StyledWrapper>
        <StyledLogin>Login</StyledLogin>
        <Select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="user">Normal User</option>
          <option value="admin">Admin</option>
        </Select>
      </StyledWrapper>
      <StyledButtonWrapper>
        <LoginButton onClick={handleSubmit}>Login</LoginButton>
      </StyledButtonWrapper>
    </StyledLoginContainer>
  );
};
