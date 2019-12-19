import React, {Component} from 'react';

import { CardList } from './components/card-list/card-list.component'
import { TwitList } from './components/card-list/twits-list.jsx'
import { SearchBox } from './components/search-box/search-box.component'

import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super(); //Super calls the constructor method, on the component class and gives us access to this.state

    this.state = {
      monsters: [],
      twits: [],
      searchField: ''
    }
    
    // this.handleChange = this.handleChange.bind(this)
    // ^^ this would only need to be here if my handleChange method is not an arrow function, since arrow functions automatically bind this to the class component. (Lexical scoping, binding "this" to where it was defined in the first place)

  }


  async componentDidMount() {
    const monsters = await axios.get('https://jsonplaceholder.typicode.com/posts')
    
    const twits = await axios.get('https://api.stocktwits.com/api/2/streams/trending.json')

    this.setState({...this.state, monsters, twits: twits.data.messages})
    
  }


  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }


  render() {
    const { monsters, twits, searchField } = this.state; //destructuring, pulling properties off of this.state, and setting them to constants called monsters and searchField

    // const twitsArray = Object.values(twits).map(monster => {
    //   return monster[2];
    // });

    // const filteredMonsters = monsters.filter(monster => 
    //     monster.title.toLowerCase().includes(searchField.toLowerCase())
    //   )
      
    const filteredTwits = twits.filter(twit => 
        twit.body.toLowerCase().includes(searchField.toLowerCase())
      )

      console.log("Monsters",monsters)
      console.log("Twits", twits)
    return (
      <div className='App'>
        <h1>Stocktwits</h1>
        <SearchBox
          placeholder={ 'search..' }
          handleChange={ this.handleChange }
        />
        {/* <CardList monsters={filteredMonsters}/> */}
        <TwitList twits={filteredTwits}/>
        
      </div>
    );
  }
}

export default App;
