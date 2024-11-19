import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './components/Container'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Library from './pages/Library';
import NewRead from './pages/NewRead';
import DetailView from './pages/DetailView'

function App() {

  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/library" element={<Library />}/>
        <Route path="/newread" element={<NewRead />}/>
        <Route path='/books/:bookID' element={<DetailView />} />
      </Routes>
    </Container>
  )
}

export default App
