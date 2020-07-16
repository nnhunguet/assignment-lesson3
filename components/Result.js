import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default function Result({gamer, computer}){

  const imgUri = [
    {
      uri: 'https://product.hstatic.net/1000230347/product/keo_thien_long_-_flexoffice_fo-sc02__8__large.jpg',
    },
    {
      uri: 'https://vlxdthaohien.com/wp-content/uploads/2019/01/%C4%90%C3%A1-1x2-L2.png'
    },
    {
      uri: 'https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/8/9/8934986002630.jpg'
    }
  ]

  const displayImage = (type) => {
    return imgUri[type-1];
  }

  return(
    <View style={styles.container}>
      <View style={styles.left}>
        <Image source={} />
      </View>
      <View style={styles.right}>
      <Text>{computer}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  left: {
    flex:5,
    backgroundColor: "red",
  },
  right: {
    flex: 5,
    backgroundColor: "yellow"
  }
})