import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <Text style={styles.greeting}>Bienvenue, {name} !</Text>
  );
};

const styles = StyleSheet.create({
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Greeting;