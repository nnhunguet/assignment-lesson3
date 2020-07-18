import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect  } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ButtonFooter from './components/ButtonFooter';
import Result from './components/Result';

let win = 0;
let lose = 0;
let equal = 0;

export default function App() {

  const [gamer, setGamer] = useState(0);
  const [computer, setComputer] = useState(0);

  const getResult = () => {
    if(gamer === computer) {
      ++equal;
      console.log('equal');
      return 'Hoà'
    }
    let value ;
    if(gamer === 1) {
     value = computer === 2 ?  'Defeated' : 'Victory' 
    }
    if(gamer === 2) {
      value = computer === 3 ? 'Defeated' : 'Victory' 
     }
     if(gamer === 3) {
      value = computer === 1 ? 'Defeated' : 'Victory' 
     }
     console.log('defeated or win')
     value === 'Defeated' ? ++lose : ++win;
     return value;
  }

  return (
    <View style={styles.container}>
      
      {/* header */}
      {
        gamer !== 0 && 
        ( <View style={styles.header}>
          <Text style={styles.resultText}>
            {
              getResult()
            }
          </Text>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.resultText}>
              Thắng
            </Text>
            <Text style={styles.resultText}>
              Hoà
            </Text>
            <Text style={styles.resultText}>
            Thua
            </Text>
          </View>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.resultText}>
              {win}
            </Text>
            <Text style={styles.resultText}>
              {equal}
            </Text>
            <Text style={styles.resultText}>
              {lose}
            </Text>
          </View>
        </View> )
      }

      {/* result */}
      <View style={styles.result}>
        <Result gamer={gamer} computer={computer}/>
      </View>

      {/* footter */}
      <View style={styles.footer}>
        <ButtonFooter 
          name="Scissors" 
          type={1} 
          setGamer={setGamer} 
          setComputer={setComputer} 
        />
        <ButtonFooter 
          name="Rock" 
          type={2} 
          setGamer={setGamer} 
          setComputer={setComputer}
        />
        <ButtonFooter 
          name="Paper" 
          type={3} 
          setGamer={setGamer} 
          setComputer={setComputer}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
  },
  result: {
    flex: 6,
    borderStyle: 'soild',
    borderColor: 'black',
    borderWidth: 2,
    margin: "auto",
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  resultText: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
  },  
  footer: {
    flex: 3,
    width: "50%",
    marginHorizontal: "auto",
  }
});
