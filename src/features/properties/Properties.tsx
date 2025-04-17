import { useMemo, useState } from 'react';
import { Property } from 'types/property';
import {
  StyledPropertiesContainer,
  StyledPropertiesWrapper,
  StyledTitle,
  StyledFilterContainer,
  StyledFilterWrapper,
  StyledLink,
  StyledSelect,
  StyledLabel,
  StyledAddButton,
  StyledViewButton,
  StyledButtonsWrapper,
} from './Properties.styled';
import { useGetAllProperties } from './hooks/useGetAllProperties';
import DataTable, { TableColumn } from 'react-data-table-component';
import { filterProperties } from './utils/FilterProperties';
import { useNavigate } from 'react-router-dom';

export const Properties = () => {
  const { properties, loading } = useGetAllProperties();
  const navigate = useNavigate();

  const [roomFilter, setRoomFilter] = useState<string | null>(null);

  const filteredProperties = useMemo(
    () => filterProperties(properties, roomFilter),
    [properties, roomFilter]
  );
  const handleViewButton = (id: string) => {
    navigate(`/properties/${id}`);
  };

  const columns: TableColumn<Property>[] = [
    {
      name: 'Address',
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: 'Price',
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: 'Rooms',
      selector: (row) => row.num_rooms,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <StyledViewButton onClick={() => handleViewButton(row.id)}>
          View
        </StyledViewButton>
      ),
      button: true,
    },
  ];

  if (loading)
    return <StyledPropertiesContainer>Loading...</StyledPropertiesContainer>;

  return (
    <StyledPropertiesContainer>
      <StyledPropertiesWrapper>
        <StyledTitle>Properties</StyledTitle>
        <StyledButtonsWrapper>
          <StyledLink to="/properties/create">
            <StyledAddButton type="button">Add Property</StyledAddButton>
          </StyledLink>
        </StyledButtonsWrapper>
      </StyledPropertiesWrapper>

      <StyledFilterContainer>
        <StyledFilterWrapper>
          <StyledLabel>Filter by number of rooms:</StyledLabel>
          <StyledSelect
            value={roomFilter ?? ''}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setRoomFilter(e.target.value || null)
            }
          >
            <option value="">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </StyledSelect>
        </StyledFilterWrapper>
      </StyledFilterContainer>
      <DataTable
        columns={columns}
        data={filteredProperties}
        pagination
        highlightOnHover
        striped
        responsive
        defaultSortFieldId={1}
        noDataComponent="No properties"
      />
    </StyledPropertiesContainer>
  );
};
