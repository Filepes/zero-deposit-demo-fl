import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import {
  StyledFormContainer,
  StyledFieldWrapper,
  StyledLabel,
  StyledFormTitle,
  StyledInput,
  StyledError,
  StyledSubmitButton,
} from './CreateProperty.styled';
import { Property } from 'types/property';
import { createPropertySchema } from './validations/createPropertySchema';
import * as PropertyServices from 'services/propertyServices';

export const CreateProperty = () => {
  const navigate = useNavigate();
  const initialData: Omit<Property, 'id'> = {
    address: '',
    num_rooms: '',
    price: 0,
  };

  const handleSubmit = async (propertyValues: Omit<Property, 'id'>) => {
    try {
      await PropertyServices.createProperty(propertyValues);
      navigate('/properties');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledFormContainer>
      <StyledFormTitle>Add New Property</StyledFormTitle>
      <Formik
        initialValues={initialData}
        validationSchema={createPropertySchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <StyledFormContainer>
              <StyledFieldWrapper>
                <StyledLabel>Address</StyledLabel>
                <StyledInput as={Field} name="address" type="text" />
                <StyledError name="address" />
              </StyledFieldWrapper>

              <StyledFieldWrapper>
                <StyledLabel>Number of Rooms</StyledLabel>
                <StyledInput as={Field} name="num_rooms" type="number" />
                <StyledError name="num_rooms" />
              </StyledFieldWrapper>

              <StyledFieldWrapper>
                <StyledLabel>Price</StyledLabel>
                <StyledInput as={Field} name="price" type="number" />
                <StyledError name="price" />
              </StyledFieldWrapper>

              <StyledSubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Create Property'}
              </StyledSubmitButton>
            </StyledFormContainer>
          </Form>
        )}
      </Formik>
    </StyledFormContainer>
  );
};
