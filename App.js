import React, { Component } from 'react';

import { StyleSheet, View, Button, Text } from 'react-native';
const customData = require('./quotes.json');
 
export default class MyProject extends Component {

  //The constructor in a React component is called before the component is mounted. 
  //When you implement the constructor for a React component, you need to call super(props) 
  //method before any other statement. If you do not call super(props) method, this.props will
  // be undefined in the constructor and can lead to bugs.
  constructor(){

    // calls parent constructor
    super();

    this.state={

      // This is our Default number value
      Quote : "Generate New Quote by pressing Button"

    }
  }

GenerateQuote=()=>
{
// random pick quote in data
// for loop to look for length in date and pick random

 var RandomNumber = Math.floor(Math.random() * 100) + 1 ;
 console.log(customData[RandomNumber]["Quote"])

this.setState({

  Quote : customData[RandomNumber]["Quote"]

})
}

  render() {
    return (
   
      <View style={styles.MainContainer} >

       <Text style={{marginBottom: 10, fontSize: 20}}>{this.state.Quote}</Text>

       <Button title="Generate New Qoute" onPress={this.GenerateQuote} />
        
      </View>

    );
  }
}

const styles = StyleSheet.create(
{
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});