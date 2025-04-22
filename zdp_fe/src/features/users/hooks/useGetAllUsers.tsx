import { useEffect, useState } from 'react';
import * as UserServices from 'services/userServices';

export const useGetAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAllUsers() {
      try {
        const data = await UserServices.getAllUsers();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }

    fetchAllUsers();
  }, []);

  return { users, loading };
};
