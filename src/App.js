import React,{Component} from 'react';
import DisplayComponent from './DisplayComponent'
import DrumPadComponent from './DrumPadComponent'

import DrumSounds from './DrumSounds';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      currentKey : "Press/Click Key"
    }
    this.playSound= this.playSound.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.drumClick=this.drumClick.bind(this);
  }

componentDidMount(){
  document.addEventListener('keydown',this.onKeyDown);
}
componentWillUMnmount(){
  document.removeEventListener('keydown',this.onKeyDown);
}

onKeyDown(e){
     if(e.key === "q" || e.key === "w" || e.key === "e" || e.key === "a" || e.key === "s" || e.key === "d" || e.key === "z" || e.key === "x" || e.key === "c") {
      this.playSound(document.getElementById(e.key.toUpperCase()));
    }
}

playSound(element){
 element.currentTime=0;
 element.play();
 this.setState({
  currentKey : element.parentElement.id
 });
} 

drumClick(key){
  this.playSound(document.getElementById(key));
}

render(){
  return (
    <div className="App">
    <h1>Drum Machine</h1>
      <div id="drum-machine">
      <DisplayComponent display={this.state.currentKey} />
      {
      DrumSounds.map((pad,index) =>
        <DrumPadComponent drumSound={pad} padClick={this.drumClick} key={index}/>
      )
      }
      </div>
    </div>
  )
}
}

export default App;
