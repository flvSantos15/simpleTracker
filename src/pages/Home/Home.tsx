import React from 'react';
import {
  StyleSheet, 
  View, 
  Text, 
  TextInput,
  TouchableOpacity,
} from 'react-native';


export function Home() {
  return(
    <View style={styles.container}>
      <Text style={styles.TitleContainer}>TaskController</Text>
      <View style={styles.TextContainer}>
        {/* um input pra pegar o nome da task */}
        <TextInput
          style={styles.taskName}
          placeholder='Type your task here...'
        />
        {/* um input pra pegar o tempo da task */}
        <TextInput
          style={styles.taskName}
          keyboardType='numeric'
        />
        {/* um botão pra chamar a função */}
        <TouchableOpacity
          style={styles.btn}
        >
          <Text style={styles.btnText}>Start</Text>
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
  TitleContainer: {
    color: '#00b4fc',
    fontSize: 30,
    // fontFamily: 'Helvetica',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  TextContainer: {
    width: '90%',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  taskName: {
    backgroundColor: '#fff',
    width: '100%',
    height: 50,
    borderRadius: 6,
    paddingLeft: 6,
    marginBottom: 15,
    fontSize: 22,
  },
  btn: {
    marginTop: 25,
    width: '100%',
    height: 50,
    backgroundColor: '#012677',
    borderRadius: 6,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    lineHeight: 50,
    fontSize: 24,
    fontWeight: '200',
  }
})