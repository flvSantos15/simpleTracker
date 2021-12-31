import React from 'react'
import { StatusBar } from 'react-native'
import { Home } from './pages/Home/Home'

export function Main(){
  return(
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='#001449'
        translucent={true}
      />
      <Home/>
    </>
  )
}

