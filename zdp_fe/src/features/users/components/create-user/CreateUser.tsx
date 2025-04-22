import { useNavigate } from 'react-router-dom';
import {
  StyledFormContainer,
  StyledFieldWrapper,
  StyledLabel,
  StyledSelect,
  StyledInput,
  StyledError,
  StyledSubmitButton,
  StyledCancelButton,
} from './CreateUser.styled';
import { Formik, Form, Field } from 'formik';
import { createUserSchema } from './validations/createUserSchema';
import * as UserServices from 'services/userServices';

export const CreateUser = () => {
  const navigate = useNavigate();
  const initialData = {
    username: '',
    role: '',
  };

  const handleSubmit = async (userValues: {
    username: string;
    role: string;
  }) => {
    try {
      await UserServices.createUser(userValues);
      navigate('/users');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledFormContainer>
      <Formik
        initialValues={initialData}
        validationSchema={createUserSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <StyledFormContainer>
              <StyledFieldWrapper>
                <StyledLabel>Username</StyledLabel>
                <StyledInput as={Field} name="username" type="text" />
                <StyledError name="username" component="div" />
              </StyledFieldWrapper>

              <StyledFieldWrapper>
                <StyledLabel>Role</StyledLabel>
                <Field as={StyledSelect} name="role" type="select">
                  <option value="">Select role</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </Field>
                <StyledError name="role" component="div" />
              </StyledFieldWrapper>

              <StyledSubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Loading' : 'Add User'}
              </StyledSubmitButton>

              <StyledCancelButton
                type="button"
                onClick={() => navigate('/users')}
              >
                Cancel
              </StyledCancelButton>
            </StyledFormContainer>
          </Form>
        )}
      </Formik>
    </StyledFormContainer>
  );
};
