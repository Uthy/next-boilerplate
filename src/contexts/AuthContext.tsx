'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in (e.g., by checking local storage or a token)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Implement login logic here
    // For example purposes, just setting a mock user
    const mockUser = { id: '1', email, name: 'John Doe' };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    document.cookie = `authToken=${mockUser.id}; path=/; max-age=86400; samesite=strict; secure`;
    router.push('/');
  };

  const register = async (email: string, password: string) => {
    // Implement register logic here
    // For example purposes, just setting a mock user
    const mockUser = { id: '1', email, name: 'John Doe' };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    document.cookie = `authToken=${mockUser.id}; path=/; max-age=86400; samesite=strict; secure`;
    router.push('/');
  };

  const logout = async () => {
    // Implement logout logic here
    setUser(null);
    localStorage.removeItem('user');
    document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    router.push('/');
  };

  const value = {
    user,
    login,
    logout,
    register,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};