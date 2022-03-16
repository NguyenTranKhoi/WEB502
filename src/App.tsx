import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import { Products } from './types/products'

function App() {
  const [count, setCount] = useState<number>(0);
  const [info, setInfo] = useState<Products>({
    name: "Khooi",
    age: 22
  });

  return (
    <div className="App">
      {count} <button onClick={() => setCount(count + 1)}>Click</button>
      <ShowInfo person={info} />
    </div>
  )
}

export default App
