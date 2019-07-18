import React, {Component} from 'react';
import { CardList } from "./components/card-list/list.jsx";
import { SearchBox } from "./components/search-box/search.jsx";
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      monsters : [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(esponse => esponse.json())
    .then(users => this.setState({monsters : users}))
  }

   handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const {monsters, searchField} = this.state
    const monterFilter = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='App-header'>
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder = 'monster search'
          handleChange = {this.handleChange}
        />
        <CardList monsters={monterFilter} />
      </div>
    );
  }
}

export default App;
