import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {AntDesign} from '@expo/vector-icons'

import { Home } from './pages/Home'
import { Tasks } from './pages/Tasks'

const Tab = createBottomTabNavigator()
const icons = {
  Home: {
    lib: AntDesign,
    name: 'home'
  },
  Tasks: {
    lib: AntDesign,
    name: 'tasks',
  }
}

export function Navigation(){
  return(
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const { lib: Icon, name } = icons[route.name]
          return <Icon name={name} size={size} color={color}/>
        },
        tabBarStyle: [
          {
            backgroundColor: '#131418',
            borderTopColor: 'rgba(255, 255, 255, 0.2)'
          }
        ],
        tabBarInactiveTintColor: '#92929c',
        tabBarActiveTintColor: '#fff',
        headerShown: false,
      })}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Home'
        }}
      />
      <Tab.Screen
        name='Tasks'
        component={Tasks}
        options={{
          title: 'Tasks'
        }}
      />
    </Tab.Navigator>
  )
}