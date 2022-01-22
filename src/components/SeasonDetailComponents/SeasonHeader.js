import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { mainFontColor, secondFontColor } from '../../utilities/GlobalStyles';

export default function SeasonHeader(props) {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${props.Season.poster_path}`
                }}
                style={styles.seasonImageImg}
            />

            <View style={styles.season_header_des}>
                <Text style={styles.season_name}>{props.Season.name}</Text>
                <Text style={styles.season_airdate}>{props.Season.air_date}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: secondFontColor,
        padding: 22,
        flexDirection: "row"
    },
    seasonImageImg: {
        width: "30%",
        height: 150,
        borderRadius: 7
    },
    season_header_des: {
        width: "70%",
        marginLeft: 20,
        marginTop: 10
    },
    season_name: {
        fontSize: 25,
        color: 'black',
        fontWeight: "600"
    },
    season_airdate:{
        color: 'black',
        fontSize: 17
    }
});