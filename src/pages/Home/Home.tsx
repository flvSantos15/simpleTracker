import React, { useEffect, useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [mileSecond, setMileSecond] = useState(0)
  
  var timeStarted = 0

  useEffect(() => {

    function rodar(){

      if(mileSecond > 99){
        setSecond(second + 1)
        setMileSecond(0)
      }
      if(second > 59){
        setMinute(minute + 1)
        setSecond(0)
      }
      if(minute > 59){
        setHour(hour + 1)
        setMinute(0)
      }
      if(hour > 24){
        setHour(0)
      }
    }
    rodar()
  }, [])

  function handleStart() {
    
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.TimeContainer}>
        <Text style={styles.timeName}>
          {`${hour}:${minute}:${second}:${ + mileSecond}`}
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={handleStart}
        >
          <Text style={styles.btnText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => alert('Stop')}
        >
          <Text style={styles.btnText}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001449',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  TimeContainer: {
    width: '90%',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 80,
  },
  timeName: {
    backgroundColor: '#fff',
    width: '70%',
    height: 50,
    padding: 2,
    borderRadius: 6,
    fontSize: 36,
    textAlign: 'center',
    alignSelf: 'center',
  },
  btnContainer: {
    marginTop: 30,
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  btn: {
    marginTop: 50,
    width: '40%',
    height: 50,
    backgroundColor: '#012677',
    borderRadius: 50,
    alignSelf: 'center',
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    lineHeight: 50,
    fontSize: 24,
    fontWeight: '200',
  }
})