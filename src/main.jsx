import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const person = {
  name: "Khôi",
  age: 8,
  status: false,
  children: [
    { id: "1", name: "Hí" },
    { id: "2", name: "Hú" },
  ]
}
//Sử dụng hàm trong react
const showAge = (age) => <p>Tủi của bạn nà: {age}</p>
//Sử dụng component trong react
const ShowAge = props => <p>Tủi của bạn là: {props.age}</p>

ReactDOM.render(
  <div>
    <p>Tên: {person.name}</p>
    <p>Tuổi: {person.age}</p>
    <p>{person.status ? "Đã hứa hôn" : "Chưa kết hôn"}</p>
    <ul>
      {person.children.map(child => <li>
        {child.name}
      </li>)}
    </ul>
    <div>function: {showAge(person.age)}</div>
    <div>Component: <ShowAge age={person.age} /></div>
  </div>
  , document.querySelector("#root"));