import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      {/* Background image */}
      <ImageBackground
        source={require('../assets/images/Waste Truck.png')} // Replace with your image URL
        style={styles.background}
        resizeMode="cover" // Use cover to fill the screen
      >
        {/* Go to Login Screen Button */}
        <TouchableOpacity
          style={styles.button}
        >
          <Link href={'/login'}>
            <Text style={styles.buttonText}>Go to Login Screen</Text>
          </Link>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    paddingHorizontal: 40,
    marginBottom: 50, // Add margin to move the button up
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
