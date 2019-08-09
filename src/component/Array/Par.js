import React from 'react';
import ListOfWords from './New'
import _ from 'lodash'
export default class WordAdder extends React.Component {
    constructor(props) {
     super(props);
     this.state = {
      words: ['marklar']
     };
    }
    
    handleClick = ()  =>{
        // this.setState(prevState => ({
        //  words: [...prevState.words, 'bella'],
        // }));

        // this.setState({
        //     words:[...this.state.words,'bella']
        // })

       let  words = _.concat(this.state.words,'bellalllllllll');
       this.setState({words})
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