interface LoginCredentials {
    email: string;
    password: string;
  }
  
  interface RegisterCredentials {
    email: string;
    password: string;
    name: string;
  }
  
  export const authService = {
    login: async ({ email, password }: LoginCredentials) => {
      // Simuler une requête API
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === 'test@example.com' && password === 'password') {
            resolve({ token: 'fake-auth-token' });
          } else {
            reject(new Error('Identifiants invalides'));
          }
        }, 1000);
      });
    },
  
    register: async (credentials: RegisterCredentials) => {
      // Simuler une requête API
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ token: 'fake-auth-token' });
        }, 1000);
      });
    },
  };