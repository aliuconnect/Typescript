/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useState} from 'react';
import {Person} from './Container/Validator'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';

const App= () => {
const [value, enterValue] = useState('Enter anything') 
const [values, enterValues] = useState() 
// const obj1 = new Calculator<string , number>();
// // obj1.number1 = '2';
// // obj1.number2 = 2
// // console.log(obj1.cal());

// const obj1 = new Practice();
// obj1.setItem('Banana' , 12);
// obj1.setItem('Orange' , 10);
// console.log(obj1.getItem('Orange'));
// obj1.clear()
// console.log(obj1.getItem('Banana'))


//   const double = (value:number): number => value * 2;
//   const greet = (name:string = 'Ali')=> { 
//     name = 'Tanveer';
//     return name;
//   }
//   let numbers: number[]= [-3, 33, 38, 5];
// let arr = Math.min(...numbers);
// let newArray: number[] = [80,90,100]
// newArray.push(...numbers)

// let testResults:number[] = [3.89, 2.99, 1.38];
// const [number0 , number1 , number2] = testResults
// var scientist: {firstName:string , experience:number}= {firstName: "Will", experience: 12};
// const {firstName , experience} = scientist;
//console.log('State value: ',value);
// let myValidator = new Validator();
// // let item = new Items();
// // item.setItem('Ali' , 23);
// // item.setItem('Salar' , 22);
// // item.getItem('Ali');
// interface valuess{
//   name:string;
//   age:number;
//   [propsName:string]:any;
//   greet(lastName:string):string;
// }
// interface funcType{
//   (person:valuess):void
// }
// let name:funcType
// name = function(person:valuess) {
//   console.log('My Name is '+person.name);
//   console.log('My Hobbies are '+person.hobbies);
//   console.log(person.greet('salar'));
  
    
// }
// const person:valuess ={
// name:'Ali',
// age:23,
// hobbies:['Sports','Reading'],
// greet(lastName:string):string{
//   return(`My name is ${this.name} ${lastName}`);
  
// }
// }
// name(person)
// //person.greet('Muhammadi')

// Generic Function
// function print<T>(data:T):T {
//   return data;
// }

// console.log(print<string>("Ali"));
// console.log(print(23));
// console.log(print<{name:string , age:number}>({name:'Ali' , age:23}));

// // Generic Array
// const arr:Array<number> = [12, 12.3, 19]
// arr.push(15)
// console.log(arr);

// // Generic types
// const print2: <T> (data:T)=> T= print
// console.log(print2(print2<string> ('Ali')))
let obj1 = new Person();


return (
  <View style={{display:'flex'}}>
<Text>Input Text</Text>
<TextInput
style={{borderWidth:2 , borderRadius:10}}
placeholder='Enter Anything'
onChangeText={(text) => enterValue(text)}
/>
<TouchableOpacity 
// onPress={()=>  myValidator.valid(value)}
style={{backgroundColor:'red', alignItems:'center' , justifyContent:'center' , width:100,height:50 ,alignSelf:'center'}}><Text style={{fontSize:20, fontWeight:'bold'}}>Add</Text></TouchableOpacity>
{/* <Text>{greet ()}</Text>
<Text>{greet ('salar')}</Text>
<Text>{newArray}</Text>
<Text>{arr}</Text>
<Text>{number0}</Text>
<Text>{number1}</Text>
<Text>{number2}</Text>
<Text>{firstName}</Text>
<Text>{experience}</Text> */}
  {/* {value === '' && ToastAndroid.show(values , ToastAndroid.LONG)} */}
  </View>
  );
};

export default App;
