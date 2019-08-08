import React from 'react';
import ListOfWords from './New'
export default class WordAdder extends React.Component {
    constructor(props) {
     super(props);
     this.state = {
      words: ['marklar']
     };
    }
    
    handleClick = ()  =>{
        this.setState(prevState => ({
         words: [...prevState.words, 'bella'],
        }));
    };

    render() {
     return (
      <div>
       <button onClick={this.handleClick} >点击</button>
       <ListOfWords words={this.state.words} />
      </div>
     );
    }
   }