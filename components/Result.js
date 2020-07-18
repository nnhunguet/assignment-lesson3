import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

export default function Result({gamer, computer}){

  const imgUri = [
      require('../assets/scissors.png'),
      require('../assets/rock.png'),
      require('../assets/paper.png')
  ]

  const title = [
    'Scissorts',
    'Rock',
    'Paper'
  ]

  const displayImage = (arr, type) => {
    return arr[type-1];
  }

  return(
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.text}>Bạn</Text>
        <Image style={styles.image}  source={displayImage(imgUri, gamer)}/>
        <Text style={styles.text}>{displayImage(title, gamer)}</Text>
      </View>
      <View>
        <Text style={styles.text}>VS</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.text}>Máy</Text>
        <Image style={styles.image}  source={displayImage(imgUri, computer)}/>
        <Text style={styles.text}>{displayImage(title, computer)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  left: {
    flex:1,
  },
  right: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    textDecorationColor: "red",
    color: "#640E13"
  }
})