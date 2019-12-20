import React, {Component} from 'react';

import { TwitList } from './components/card-list/twits-list.jsx'
import { SearchBox } from './components/search-box/search-box.component'

import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      monsters: [],
      twits: [],
      searchField: ''
    }
  

  }


  async componentDidMount() {
    
    const twits = await axios.get('https://orbis-twits.herokuapp.com')

    // const twits = await axios.get('https://api.stocktwits.com/api/2/streams/trending.json')

    this.setState({...this.state, twits: twits.data.messages})
    
  }


  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }


  render() {
    const { twits, searchField } = this.state; 

      
    const filteredTwits = twits.filter(twit => 
        twit.body.toLowerCase().includes(searchField.toLowerCase())
      )

      console.log("Twits", twits)
    return (
      <div className='App'>
        <h1>Stocktwits</h1>
        <SearchBox
          placeholder={ 'search..' }
          handleChange={ this.handleChange }
        />
        <TwitList twits={filteredTwits}/>
        
      </div>
    );
  }
}

export default App;
