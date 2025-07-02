import React from 'react';
import ( View, Text, Button, Stylesheet )
from 'react-native';

export default function SecondaryScreen ({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}> 
        Escolha sua Delicia</Text>
  
    <View style={styles.buttonContainer}>
      <Button title="Cafe" onPress={() => navigation.navigate('Cafe')}
        color="#a0522d"
    />
  <View style={styles.buttonContainer}>
    <Button title="Bolo de Chocolate" onPress={() => navigation.navigate('Bolo')}
    color="#8b4513"
  />
  </View>
  
  <View style-{style.buttonContainer}>
    <Button title="Pão Caseiro" onPress={() => navigation.navigate('Pao')}
    color="#deb887"
    />
  </View>
</View>
  );
}

export default function SecondaryScreen (

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fffafa',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold".
    marginBottom: 40,
    color: '#444',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '60%',
  },
});