import React ,{Component} from 'react';
import {SafeAreaView,View,Text,Button,ScrollView,TextInput} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
class App extends Component{
// constructor(props){
//   super(props);
//   this.state = {
//     color:'white'
//   }
// }


// changeColor = () => {
// if(this.state.color == 'white'){
//   this.setState({color:'red'})
// }else{
//   this.setState({color:'white'});
// }
// }


  render(){
    return (
          <AppNavigation />
    )
  }

}
export default App;