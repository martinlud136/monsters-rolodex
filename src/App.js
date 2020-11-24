import React,{Component} from "react"
import { CardList } from "./components/card-list/card-list.component"
import {SearchBox} from "./components/search-box/search-box.component.jsx"
import "./App.css"

class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters : [],
      searchField: ""
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({monsters: data}))
  }

  render(){
    const monstersfiltered = this.state.monsters.filter(item => item.name.toLowerCase().includes(this.state.searchField.toLocaleLowerCase()) )
    return (
      <div className= "App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder= "busca un mounstruito" handleChange= {e => this.setState({searchField: e.target.value})}/>
        <CardList monsters= {monstersfiltered}/>
      </div>
    );
  }
}

export default App;
