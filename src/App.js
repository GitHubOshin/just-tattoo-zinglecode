import './App.css'
import data from './data'
import Header from './components/Header'
import TattooItem from './components/TattooItem'

function App() {
  const tattooElements = data.map((tattoo, index) => {
    return <TattooItem key={index} img={tattoo.img} name={tattoo.name} />
  })
  return (
    <div className="App">
      <Header />
      <div className="app-grid">{tattooElements}</div>
    </div>
  )
}

export default App
