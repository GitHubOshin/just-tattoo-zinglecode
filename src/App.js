import './App.css'
import data from './data'
import Header from './components/Header'
import TattooItem from './components/TattooItem'
import { useState } from 'react'
import TattooPost from './components/TattooPost'

function App() {
  const [selectedTattoo, setSelectedTattoo] = useState(data[4])

  const tattooElements = data.map((tattoo, index) => {
    return <TattooItem key={index} img={tattoo.img} name={tattoo.name} />
  })

  let tattooPost = null
  if (!!selectedTattoo) {
    tattooPost = <TattooPost tattoo={selectedTattoo} />
  }
  return (
    <div className="App">
      <Header />
      <div className="app-grid">{tattooElements}</div>
      {tattooPost}
    </div>
  )
}

export default App
