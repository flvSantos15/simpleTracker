import React from 'react'
import { AppRegistry} from 'react-native'

import { Main } from './src/Index'

export default function App() {
  return (
    <>
      <Main/>
    </>
  );
}

AppRegistry.registerComponent('main', () => Main)