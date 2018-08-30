import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

/*
export default class Weather extends Component {
    render() {
        return (
            <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
                <View style={styles.upper}>
                    <Ionicons name="ios-rainy" size={144} color="white" />
                    <Text style={styles.temperature}>45º</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>Raining like a Cat & Dog</Text>
                    <Text style={styles.subtitle}>For more info look outside</Text>
                </View>
            </LinearGradient>
        );
    }
}
*/
const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining like a Cat & Dog",
        subtitle: "For more info look outside",
        icon: "weather-rainy"
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "Sunny~~",
        subtitle: "Go get outside and enjoy",
        icon: "weather-sunny"
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunder storm in your area!",
        subtitle: "Actually, outside of the house",
        icon: "weather-lightning"
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "Little bit gray, but it's cool",
        icon: "weather-cloudy"
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman?",
        icon: "weather-snow"
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain?",
        icon: "weather-hail"
    },
    Haze: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "Don't know what that is 💩",
        icon: "weather-hail"
    },
    Mist: {
        colors: ["#D7D2CC", "#304352"],
        title: "Mist!",
        subtitle: "It's like you have no glasses on.",
        icon: "weather-fog"
    }
};



export default function Weather({ temp, weatherName }) {
    console.log(weatherName);
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons
                    name={weatherCases[weatherName].icon}
                    size={144}
                    color="white" />
                <Text style={styles.temperature}>{temp}º</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );

}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    temperature: {
        fontSize: 48,
        color: "white"
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 30,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        marginBottom: 100,
        backgroundColor: "transparent",
        color: "white",
        fontSize: 24
    }
});