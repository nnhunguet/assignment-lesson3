import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ButtonFooter({name, type, setGamer, setComputer}) {

  const handleClick = (type) => {
    type === 1 ? (setGamer(1), setComputer(Math.floor(Math.random()*3)+1)) : type === 2 ? (setGamer(2),setComputer(Math.floor(Math.random()*3)+1)) : (setGamer(3),setComputer(Math.floor(Math.random()*3)+1))
  }
  
  return(
    <TouchableOpacity style={styles.button} onPress={() => handleClick(type)}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    padding: 16,
    marginBottom: 16,
    borderRadius: 10,
    alignItems: "center", 
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: 700,
  }
})