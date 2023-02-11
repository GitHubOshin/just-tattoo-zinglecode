import './App.css'
import data from './data'
import Header from './components/Header'
import TattooItem from './components/TattooItem'
import { useState } from 'react'
import TattooPost from './components/TattooPost'
import SearchText from './components/SearchText'

function App() {
  const [selectedTattoo, setSelectedTattoo] = useState(null)
  const [searchText, setSearchText] = useState('')

  function onSearchText(e) {
    setSearchText(e.target.value)
  }

  function onTattooOpen(index) {
    setSelectedTattoo(index)
  }

  function onTattooClose() {
    setSelectedTattoo(null)
  }

  const filterTattoos = data.filter((tattoo) => {
    return tattoo.name.includes(searchText)
  })

  const tattooElements = filterTattoos.map((tattoo, index) => {
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
      <section className="app-section">
        <div className="app-container">
          <SearchText value={searchText} onChange={onSearchText} />
          <div className="app-grid">{tattooElements}</div>
        </div>
      </section>
      {tattooPost}
    </div>
  )
}

export default App
