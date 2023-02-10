import data from './data'
import Header from './components/Header'
import TattooItem from './components/TattooItem'
import { useState } from 'react'
import TattooPost from './components/TattooPost'

function App() {
  const [selectedTattoo, setSelectedTattoo] = useState(null)

  function onTattooOpen(index) {
    setSelectedTattoo(index)
  }

  function onTattooClose(params) {
    setSelectedTattoo(null)
  }

  const tattooElements = data.map((tattoo, index) => {
    return (
      <TattooItem key={index} tattoo={tattoo} onShowTattoo={onTattooOpen} />
    )
  })

  let tattooPost = null
  if (!!selectedTattoo) {
    tattooPost = (
      <TattooPost tattoo={selectedTattoo} onBgClick={onTattooClose} />
    )
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

