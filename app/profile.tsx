import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Greeting from '../components/Greeting';
import { useRouter } from 'expo-router';

export default function Profile() {
  const router = useRouter();
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    console.log('Nombre de likes actuel:', likes);
    
    if (likes > 0 && likes % 5 === 0) {
      console.log('Félicitations ! Vous avez atteint', likes, 'likes !');
    }
  }, [likes]);

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  const handleReset = () => {
    setLikes(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Greeting name="Mouad AOUGHANE" />
        <Text style={styles.info}>Âge: 25 ans</Text>
        <Text style={styles.likes}>Likes: {likes}</Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLike}>
            <Text style={styles.buttonText}>Like</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.resetButton]} 
            onPress={handleReset}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    padding: 15,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  likes: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});