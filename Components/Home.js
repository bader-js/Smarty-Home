import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  ImageBackground,
} from 'react-native';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //default value of the date time
      date: '',
    };
  }
  // Switch Month number by month name
  componentDidMount() {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    //Set Date Configuration 
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = monthNames[new Date().getMonth()]; //Current Month
    var year = new Date().getFullYear(); //Current Year

    that.setState({
      //Setting the value of the date time
      date: month + ' ' + date + ', ' + year + ' ',
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.date}</Text>
        <Text style={styles.text1}> Welcome, {this.props.route.params.x}!</Text>
        <ScrollView>
          <ImageBackground
            imageStyle={{borderRadius: 10}}
            source={require('../assets/livingroom.png')}
            style={styles.ImageStyle}>
            <Text style={styles.Room}>Living Room</Text>
            <Text style={styles.device}>4 Devices</Text>
          </ImageBackground>
          <ImageBackground
            imageStyle={{borderRadius: 10}}
            source={require('../assets/mediaroom.png')}
            style={styles.ImageStyle}>
            <Text style={styles.Room}>Media Room</Text>
            <Text style={styles.device}>6 Devices</Text>
          </ImageBackground>
          <ImageBackground
            imageStyle={{borderRadius: 10}}
            source={require('../assets/bathroom.png')}
            style={styles.ImageStyle}>
            <Text style={styles.Room}>Bathroom</Text>
            <Text style={styles.device}>1 Device</Text>
          </ImageBackground>
          <ImageBackground
            imageStyle={{borderRadius: 10}}
            source={require('../assets/bedroom.png')}
            style={styles.ImageStyle}>
            <Text style={styles.Room}>Bedroom</Text>
            <Text style={styles.device}>3 Devices</Text>
          </ImageBackground>
        </ScrollView>
        
      </View>
    );
  }
  //Bader ben rejeb project
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F8FAF9',
  },
  ImageStyle: {
    width: 320,
    height: 150,
    marginTop: 20,
    marginLeft: 20,

    marginBottom: 10,
    resizeMode: 'contain',
  },
  text: {color: '#8E9295', fontSize: 15, marginTop: 10, marginLeft: 15},
  text1: {color: '#0D1215', fontSize: 25, marginTop: 5, marginLeft: 12},
  Room: {
    fontWeight: 'bold',
    color: 'white',
    marginTop: 100, // child
    marginBottom: 5,
    left: 10,
  },
  device: {
    color: 'white',
    position: 'absolute', // child
    bottom: 5, // position where you want
    left: 10,
  },
});
