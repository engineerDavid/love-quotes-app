import React, { Component } from 'react';

import { StyleSheet, View, Button, Text } from 'react-native';
const customData = require('./quotes.json');
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
    intialQuote = RandomNumber

    this.state={

      // This is our Default number value
      Quote : customData[RandomNumber]["Quote"]

    }
  }

GenerateNewQuote=()=>
{
// random pick quote in data
// for loop to look for length in date and pick random

//48391 is length of data
 var RandomNumber = Math.floor(Math.random() * 48391) + 1 ;
 history.push(RandomNumber); 
 console.log(history);

this.setState({

  Quote : customData[RandomNumber]["Quote"]

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

       <Text style={styles.textStyle}>{this.state.Quote}</Text>

       

       <View style={ styles.bottomView} >
 
       <Button style={ styles.button} title="Previous" onPress={this.GenerateOldQuote} />
       <Button style={ styles.button} title="Generate New Qoute" onPress={this.GenerateNewQuote} />
       
               </View>
        
      </View>
      

    );
  }
}

const styles = StyleSheet.create(
{
  
  MainContainer:
  {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  textStyle:{
 
    textAlign: 'center',
    marginVertical: 8,
    
    
  },

  bottomView:{

    
    height: 80, 
    //backgroundColor: '#FF9800', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    padding: 20,
    flexDirection: 'row',

    
   
    
    
  },
  button: {
    marginLeft: 20,
    
 }
});