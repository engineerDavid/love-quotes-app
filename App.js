import React, { Component } from 'react';

import { StyleSheet, View, Button, Text } from 'react-native';
import { GestureHandler } from 'expo';

//Get the quote data from the json file
const quoteData = require('./quotes.json');
var history = [];
var intialQuote = 0;
 
export default class MyProject extends Component {

  //The constructor in a React component is called before the component is mounted. 
  //When you implement the constructor for a React component, you need to call super(props) 
  //method before any other statement. If you do not call super(props) method, this.props will
  // be undefined in the constructor and can lead to bugs.
  constructor(){

    // calls parent constructor
    super();
    var RandomNumber = Math.floor(Math.random() * 48391) + 1 ;
    intialQuote = RandomNumber;

    
    this.state= {

      // This is our Default number value
      Quote : quoteData["quotes"][2]


     

    }
  }

  

GenerateNewQuote=()=>
{
// random pick quote in data
// for loop to look for length in date and pick random

//0-2 is length of data
 var RandomNumber = Math.floor(Math.random() * 3);
 history.push(RandomNumber); 
 console.log(RandomNumber);

this.setState({

  Quote : quoteData["quotes"][RandomNumber],
  

})



}


GenerateOldQuote=()=>
{
// random pick quote in data
// for loop to look for length in date and pick random

//48391 is length of data

 var Previous = history[history.length-2]
 console.log(customData[Previous]["Quote"]);
 history.pop()

this.setState({

  Quote : customData[Previous]["Quote"]

})



}


  render() {
    return (
   
      <View style={styles.MainContainer} >
      <React.Fragment>

      <Text style={styles.quoteText}>{this.state.Quote.text}</Text>
					<Text style={styles.quoteAuthor}>{this.state.Quote.author}</Text>
          <Button onPress={this.GenerateNewQuote} title="Show Me Another Quote!" />
          </React.Fragment>


       
        
      </View>
      

    );
  }
}

const styles = StyleSheet.create(
{
  
  MainContainer:
  {
    flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		padding: 25,
  },
  quoteText: {
		textAlign: "center",
		fontSize: 28,
	},
	quoteAuthor: {
		fontSize: 18,
		marginTop: 25,
	},
 
});