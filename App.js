import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect  } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

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
    <SafeAreaView style={styles.container}>
      
      {/* header */}
      {
        gamer !== 0 && 
        ( 
        <View style={styles.header}>
          <Text style={styles.resultText}>
            {
              getResult()
            }
          </Text>
          <Text style={{textAlign: "center"}}>Tổng số trận: {parseInt(win+lose+equal)}</Text>
          <View style={{flexDirection: "row", justifyContent: "space-around"}}>
            <Text style={styles.countText}>
              Thắng
            </Text>
            <Text style={styles.countText}>
              Hoà
            </Text>
            <Text style={styles.countText}>
            Thua
            </Text>
          </View>
          <View style={{flexDirection: "row", justifyContent: "space-around"}}>
            <Text style={styles.countText}>
              {win}
            </Text>
            <Text style={styles.countText}>
              {equal}
            </Text>
            <Text style={styles.countText}>
              {lose}
            </Text>
          </View>
          <View style={{flexDirection: "row", justifyContent: "space-around"}}>
            <Text style={styles.countText}>
              Tỷ lệ win: {parseFloat(win/(win+lose+equal)).toFixed(2)}
            </Text>
            <Text style={styles.countText}>
              Tỷ lệ hoà: {parseFloat(equal/(win+lose+equal)).toFixed(2)}
            </Text>
            <Text style={styles.countText}>
              Tỷ lệ thua: {parseFloat(lose/(win+lose+equal)).toFixed(2)}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
  },
  header: {
    flexDirection: "column",
    width: "100%",
  },
  resultText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
  },  
  countText: {
    fontSize: 14,
  },
  result: {
    flex: 6,
    borderStyle: 'solid',
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
  footer: {
    flex: 3,
    width: "50%",
    marginHorizontal: "auto",
  }
});
