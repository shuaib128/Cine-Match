import React from 'react'
import {
    View, Text, StyleSheet,
    TouchableOpacity
} from 'react-native'
import { mainFontColor, secondFontColor } from '../../utilities/GlobalStyles'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useRoute } from '@react-navigation/native'

export default function UpNav(props) {
    const route = useRoute();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={.7}
                onPress={() => {
                    props.navigation && props.navigation.navigate('HomeScreen')
                }}
            >
                <Text style={[
                    styles.list_text,
                    {
                        color: route.name === "HomeScreen" ? secondFontColor : mainFontColor
                    }
                ]}>
                    Movies
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={.7}
                onPress={() => {
                    props.navigation && props.navigation.navigate('TVSeresScreen')
                }}
            >
                <Text style={[
                    styles.list_text, styles.list_text_middle,
                    {
                        color: route.name === "TVSeresScreen" ? secondFontColor : mainFontColor
                    }
                ]}>
                    Tv Series
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={.7}
                onPress={() => {
                    props.navigation && props.navigation.navigate('WatchListScreen')
                }}
            >
                <Text style={[styles.list_text, styles.list_text_mylist]}>
                    My List
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: "center"
    },
    searchIcon: {
        alignSelf: "center"
    },
    list_text: {
        fontSize: 18,
        color: mainFontColor
    },
    list_text_middle: {
        marginHorizontal: 20
    }
});