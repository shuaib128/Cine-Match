import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import { mainFontColor, secondFontColor, thirdFontColor } from '../../utilities/GlobalStyles'

function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "m";
}

export default function Descridtions(props) {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={styles.des_header}>
                    <View style={styles.reviewblock}>
                        <Ionicons
                            style={styles.searchIcon}
                            name="star"
                            size={15}
                            color={secondFontColor}
                        />
                        <Text style={styles.vote_average}>{props.Movie.vote_average}</Text>
                    </View>
                    <Text style={styles.runtime}>{timeConvert(props.Movie.runtime)}</Text>
                    <Text style={styles.runtime}>18+</Text>
                </View>

                <View style={styles.add_message}>
                    <TouchableOpacity
                        activeOpacity={.7}
                    >
                        <Ionicons
                            style={styles.searchIcon}
                            name="add-circle-outline"
                            size={23}
                            color={mainFontColor}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={.7}
                    >
                        <Ionicons
                            style={styles.searchIconRight}
                            name="chatbubbles-outline"
                            size={23}
                            color={mainFontColor}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.title}>{props.Movie.title}</Text>
            <Text style={styles.des}>{props.Movie.overview}</Text>

            <View style={styles.extra_infos}>
                
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
    },
    des_header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    reviewblock: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: "black",
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 4
    },
    vote_average: {
        color: mainFontColor,
        marginLeft: 5
    },
    runtime: {
        color: mainFontColor,
        marginLeft: 15
    },
    title: {
        color: mainFontColor,
        fontSize: 18,
        marginTop: 20
    },
    des: {
        color: mainFontColor,
        fontSize: 15,
        marginTop: 8,
        color: thirdFontColor,
        lineHeight: 20,
        width: '100%'
    },
    add_message: {
        flexDirection: 'row'
    },
    searchIconRight: {
        marginLeft: 15
    },
    extra_infos:{
        
    }
});