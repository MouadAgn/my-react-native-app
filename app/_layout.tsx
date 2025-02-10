import { Stack } from 'expo-router';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import { useEffect } from 'react';

function RootLayoutNav() {
  const { token } = useAuth();

  return (
    <Stack>
      {token ? (
        // Écrans authentifiés
        <>
          <Stack.Screen 
            name="index" 
            options={{ 
              title: 'Accueil',
              headerShown: true
            }} 
          />
          <Stack.Screen 
            name="profile" 
            options={{ 
              title: 'Profil',
              headerShown: true
            }} 
          />
        </>
      ) : (
        // Écrans non authentifiés
        <>
          <Stack.Screen 
            name="login" 
            options={{ 
              title: 'Connexion',
              headerShown: false 
            }} 
          />
          <Stack.Screen 
            name="register" 
            options={{ 
              title: 'Inscription',
              headerShown: false 
            }} 
          />
        </>
      )}
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}