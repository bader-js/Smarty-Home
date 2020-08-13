import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
//Import of AsyncStorage to make session of user actif
import AsyncStorage from '@react-native-community/async-storage';

export default class Cards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //User specify by one attribute
      username: '',
    };
  }
  //get the USER storage in the AsyncStorage
  displayData = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      if (user != null) {
        this.props.navigation.navigate('Home', {x: user});
      }
    } catch (error) {
      alert(error);
    }
  };
  // this function is the first function running by the app
  //if user exist Home screen display
  //else Cards screen
  componentDidMount() {
    this.displayData();
  }
  // first Time the user enter his name
  // the data will be saved in the AsynchStorage
  saveData() {
    AsyncStorage.setItem('user', this.state.username);
    this.props.navigation.navigate('Home', {x: this.state.username});
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/home.png')} />
        <Text style={styles.text}>Smarty</Text>
        <Text style={styles.text1}>Welcome Home</Text>
        <TextInput
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          placeholder="Your Name"
          style={styles.textinput}></TextInput>
        <TouchableOpacity
          title="CONTINUE"
          style={styles.button}
          onPress={() => this.saveData()}>
          <Text style={styles.textStyle}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
//each Components has a specific style 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAF9',
  },
  image: {alignContent: 'center', width: -150, marginTop: 40},
  text: {color: '#0D1215', paddingLeft: 120, fontSize: 40, marginTop: 10},
  text1: {color: '#8E9295', paddingLeft: 115, fontSize: 20, marginTop: 10},
  textinput: {
    color: '#8E9295',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    margin: 70,
    textAlign: 'center',
    borderColor: 'gray',
  },
  button: {
    marginLeft: 110,

    backgroundColor: '#047BEF',
    borderRadius: 10,
    height: 60,
    width: 150,
  },
  textStyle: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 15,
  },
});
