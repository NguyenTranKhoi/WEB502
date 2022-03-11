import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Box from './components/Box';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  const [myStatus, setMyStatus] = useState(false);
  const [products, setProducts] = useState([{ id: 1, name: "A" }, { id: 2, name: "B" }, { id: 3, name: "C" }])
  //remove item
  const removeItem = (id) => {
    const newProducts = products.filter(item => item.id !== id);
    setProducts(newProducts);
  }

  return <div>
    <h2>Demo State Basic</h2>
    Number: {count} <br />
    String: <Box color={color} /><br />
    <h2>Demo Event</h2>
    Boolean: {myStatus ? "Đã nhận được tiền" : "Chưa nhận được tiền"} <br />
    <hr />
    Number: {count} <br /> <button onClick={() => setCount(count + 1)}>Click count</button>
    <button onClick={() => setMyStatus(!myStatus)}>Click Status</button>
    <br />
    {myStatus && <div>
      Arr: {products.map(item => <div>{item.name}
        <button onClick={() => removeItem(item.id)}>Delete</button>
      </div>)}
    </div>}
    <hr />
  </div>
}

export default App
