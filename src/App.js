import {useState} from 'react'

import './App.css'

import EachApp from './EachApp'

const usersList = [
  {
    id: 1,
    name: 'Vivek',
  },
  {
    id: 2,
    name: 'Vani',
  },
  {
    id: 3,
    name: 'Tharun',
  },
  {
    id: 4,
    name: 'Durga',
  },
  {
    id: 5,
    name: 'Akshay',
  },
]

const App = () => {
  const [name, setName] = useState('')

  const users = usersList.filter(each =>
    each.name.toLowerCase().includes(name.toLowerCase()),
  )

  return (
    <div style={{textAlign: 'center'}}>
      <h1>User Details</h1>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <ul style={{padding: 0}}>
        {users.map(each => (
          <EachApp key={each.id} each={each} username={name} />
        ))}
      </ul>
    </div>
  )
}

export default App
