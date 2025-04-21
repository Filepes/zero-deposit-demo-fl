import DataTable, { TableColumn } from 'react-data-table-component';
import {
  StyledUsersContainer,
  StyledUsersWrapper,
  StyledTitle,
  StyledLink,
  StyledAddUserButton,
  StyledButtonsWrapper,
  StyledViewButton,
} from './Users.styled';
import { useGetAllUsers } from './hooks/useGetAllUsers';
import { User } from 'types/user';
import { useNavigate } from 'react-router-dom';

export function Users() {
  const { users, loading } = useGetAllUsers();
  const navigate = useNavigate();

  if (loading) return <StyledUsersContainer>Loading...</StyledUsersContainer>;

  const handleViewButton = (id: string) => {
    navigate(`/users/${id}`);
  };

  const columns: TableColumn<User>[] = [
    {
      name: 'Username',
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: 'Role',
      selector: (row) => row.role,
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

  return (
    <StyledUsersContainer>
      <StyledUsersWrapper>
        <StyledTitle>Users</StyledTitle>
        <StyledButtonsWrapper>
          <StyledLink to="/users/create">
            <StyledAddUserButton>Add User</StyledAddUserButton>
          </StyledLink>
        </StyledButtonsWrapper>
      </StyledUsersWrapper>
      <DataTable
        columns={columns}
        data={users}
        pagination
        highlightOnHover
        striped
        responsive
        defaultSortFieldId={1}
        noDataComponent="No users"
      />
    </StyledUsersContainer>
  );
}
