import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as UserServices from 'services/userServices';
import { User } from 'types/user';

export const useGetUser = () => {
  const { id } = useParams();

  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await UserServices.getUserById(id as string);
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchUser();
  }, [id]);

  return { user, loading };
};
