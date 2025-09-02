import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'staff';
  organization: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in on app load
  useEffect(() => {
    const storedUser = localStorage.getItem('flowguard_user');
    const storedToken = localStorage.getItem('flowguard_token');
    
    if (storedUser && storedToken) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('flowguard_user');
        localStorage.removeItem('flowguard_token');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call - replace with actual authentication
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo credentials - replace with actual API authentication
      const validCredentials = [
        { email: 'admin@municipality.gov', password: 'admin123', role: 'admin' as const },
        { email: 'staff@municipality.gov', password: 'staff123', role: 'staff' as const },
        { email: 'demo@flowguard.ai', password: 'demo123', role: 'admin' as const }
      ];

      const credential = validCredentials.find(
        cred => cred.email === email && cred.password === password
      );

      if (credential) {
        const userData: User = {
          id: '1',
          email: credential.email,
          name: credential.role === 'admin' ? 'System Administrator' : 'Staff Member',
          role: credential.role,
          organization: 'Municipal Water Management'
        };

        // Store user data and token
        const token = 'fake-jwt-token-' + Date.now();
        localStorage.setItem('flowguard_user', JSON.stringify(userData));
        localStorage.setItem('flowguard_token', token);
        
        setUser(userData);
        return true;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('flowguard_user');
    localStorage.removeItem('flowguard_token');
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
