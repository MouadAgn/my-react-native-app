import React, { createContext, useState, useContext, useEffect } from 'react';
import { storageService } from '../services/storageService';

interface AuthContextType {
  token: string | null;
  isLoading: boolean;
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Vérifier s'il y a un token stocké au démarrage
    loadToken();
  }, []);

  const loadToken = async () => {
    try {
      const storedToken = await storageService.getToken();
      if (storedToken) {
        setToken(storedToken);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (newToken: string) => {
    await storageService.setToken(newToken);
    setToken(newToken);
  };

  const signOut = async () => {
    await storageService.removeToken();
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};