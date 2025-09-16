import { useState } from 'react'
import './App.css'

function App() {
  const [fortunes, setFortunes] = useState([ 'asterka dzis odpali', 'mniam mniam olej', 'prog dzis wykwitnie', 'znajdziesz dzis fajna oferte na olx, na pomorzu >:)', 'passatowi dzis wybuchnie turbina', 'polonez dzis lepiej skrecac bedzie', 'w sejaku zadziala reczny', 'alfa wyjdzie z warsztatu', 'matiz dzis ugnie sie przed krzakiem', 'e3smiec skonczy w rowie'])
  const [fortune, setFortune] = useState(null)
  const [value, setValue] = useState('')

  const handleShowFortune = () =>{
    let index = Math.floor(Math.random() * fortunes.length)
    setFortune(fortunes[index]);
    console.log(fortune)
  }
  const handleInputChange = (e) =>{
    setValue(e.target.value)
  }
  const handleAddFortune = () =>{
    if(value === ''){
      return alert("Wpisz cos do inputa")
    }
    else{
      const newFortunes = [...fortunes, value]
      setFortunes(newFortunes)
      alert(`Dodano wrozbe: ${value}`)
      
    }
  }

  return(
    <>
    <h1>Generator cytatow wszelakich</h1>
    <button onClick={handleShowFortune}>Zobacz wrozbe</button>
    <div className="container">
      <input type="text" value={value} onChange={handleInputChange}/>
      <button onClick={handleAddFortune}>Dodaj</button>
    </div>
    <h6>Liczba wrozb: {fortunes.length}</h6>
    {fortune ? <h1>{fortune}</h1> : null}
    </>
  )
}

export default App
