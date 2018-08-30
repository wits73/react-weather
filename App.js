import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Weather from "./Weather";

export default class App extends Component {
  state = { 
    isLoaded: false,
    lat: null,
    long: null,
    error: null,
    name: null,
    temperature:null
  };
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        console.log(error);
        this.setState({
          error: error.message
        });
      }
    );
  };
  _getWeather = (lat, long) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=241051bf13976dd3ddf8b8d9f247255e`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          temperature: json.main.temp,
          name: json.weather[0].main,
          isLoaded: true
        });
      });
  };
  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather 
            temp={Math.floor(temperature - 273.15)} 
            weatherName={name} /> 
          ) : (
            <View style={styles.loading}>
              <Text style={styles.loadingText}>Getting the weather</Text>
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  errorText:{
    color:"red",
    backgroundColor: "transparent",
    marginBottom:25 
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100
  }
});
