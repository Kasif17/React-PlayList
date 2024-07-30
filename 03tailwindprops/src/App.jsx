import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App(props) {
 

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-green-500 rounded-1xl mb-2">
      Hello world!
    </h1>
    <Card price="$120" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4zJyFhZZRiReRMWshAiOOqADlJS6sSxhkdg&s"/>
    <Card price="$124" src ="https://images.pexels.com/photos/27199200/pexels-photo-27199200/free-photo-of-a-man-in-a-pink-suit-and-sunglasses-is-posing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
    <Card price="$126" src ="https://images.pexels.com/photos/21550488/pexels-photo-21550488/free-photo-of-blue-scooter-parked-by-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
    </>
  )
}

export default App
