import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'

import { Navigation } from './Navigation'

export function Main(){
  return(
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='#000'
        translucent={true}
      />
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </>
  )
}