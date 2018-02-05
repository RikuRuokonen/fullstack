import React from 'react';


const Person = (props) => {
  return(
    <div>
    <h3>{props.name}</h3>
    <p>{props.number}</p>
  </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
          id: Math.floor(Math.random() * Math.floor(1000000)),
          number: '044-120130130'
       },
       { name: 'He-Man',
       id: Math.floor(Math.random() * Math.floor(1000000)),
       number: 'En käytä'
    }
      ],
      newName: '',
      newNum: '',
      search: ''
    }
  }
  
  handleChange = (event) => {
    this.setState({
      newName: event.target.value,
    })
  }

  handleChange2 = (event) => {
    this.setState({
      newNum: event.target.value,
    })
  }
  handleChange3 = (event) => {
    this.setState({
      search: event.target.value,
    })
  }


  


  addName = (event) => {
    var found = false;
    for(var i = 0; i < this.state.persons.length; i++) {
        if (this.state.persons[i].name === this.state.newName) {
            found = true;
            break;
        }
    }
    if(found ===false){
      event.preventDefault()
      const newPerson = {
        name: this.state.newName,
        number: this.state.newNum,
        id: Math.floor(Math.random() * Math.floor(1000000)),
      }
    
      const persons = this.state.persons.concat(newPerson)
    
      this.setState({
        persons: persons,
        newName: '',
        newNum: ''
      })
    }
  }

  filterList(){
    const result = this.state.persons.filter(person => person.name === this.state.search);
    if(result.length > 0 ){
      return result
    }else {
      return this.state.persons
    }
  }

  render() {
    const persons = this.filterList()
    return (
      <div>
        suodata: <input value={this.state.search} onChange={this.handleChange3} />
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addName}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handleChange} /><br />
            numero: <input value={this.state.newNum} onChange={this.handleChange2} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {persons.map(person => <Person key={person.id} name={person.name} number={person.number} />)}
      </div>
    )
  }
}

export default App
