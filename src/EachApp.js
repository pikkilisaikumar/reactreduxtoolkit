import './App.css'

const EachApp = ({each, username}) => {
  const {name} = each

  const iterate = name.split('')

  const usernameone = username.toLowerCase()

  //   console.log(iterate)

  const person = iterate.map((eachstring, index) => {
    console.log(index)
    if (usernameone.includes(eachstring.toLowerCase())) {
      return <span className="string__red">{eachstring}</span>
    }
    return <span style={{color: 'aqua'}}>{eachstring}</span>
  })

  console.log(person)

  return (
    <div>
      <h1>{person}</h1>
    </div>
  )
}

export default EachApp
