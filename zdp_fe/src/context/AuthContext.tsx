import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import * as UserServices from 'services/userServices';
import { User } from 'types/user';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (role: 'user' | 'admin') => Promise<void>;
  logout: () => void;
  isAdmin: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        if (localStorage.getItem('token')) {
          const currentUser = await UserServices.getCurrentUser();
          setUser(currentUser);
        }
      } catch (error) {
        console.error(error);
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  const login = async (role: 'user' | 'admin') => {
    const { user } = await UserServices.login(role);
    setUser(user);
  };

  const logout = () => {
    UserServices.logout();
    localStorage.removeItem('role');
    setUser(null);
  };

  const isAdmin = () => {
    return user?.role === 'admin';
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('error');
  }
  return context;
};
