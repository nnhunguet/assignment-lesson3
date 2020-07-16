import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ButtonFooter from './components/ButtonFooter';
import Result from './components/Result';

export default function App() {

  const [gamer, setGamer] = useState(0);
  const [computer, setComputer] = useState(0);

  // const onPress = () => {

  // }
  const getResult = () => {
    if(gamer === computer) {
      return 'Hoà'
    }
    let value ;
    if(gamer === 1) {
     value = computer === 2 ? 'Defeated' : 'Victory' 
    }
    if(gamer === 2) {
      value = computer === 3 ? 'Defeated' : 'Victory' 
     }
     if(gamer === 3) {
      value = computer === 1 ? 'Defeated' : 'Victory' 
     }
     return value;
  }

  return (
    <View style={styles.container}>
      
      {/* header */}
      {
        gamer !== 0 && 
        <View style={styles.header}>
          <Text>
            {
              getResult()
            }
          </Text>
        </View>


      }

      {/* result */}
      <View>
        <Result gamer={gamer} computer={computer}/>
      </View>

      {/* footter */}
      <View style={styles.footer}>
        <ButtonFooter name="Scissors" type={1} setGamer={setGamer} setComputer={setComputer}/>
        <ButtonFooter name="Rock" type={2} setGamer={setGamer} setComputer={setComputer}/>
        <ButtonFooter name="Paper" type={3} setGamer={setGamer} setComputer={setComputer}/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
