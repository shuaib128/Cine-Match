import React from 'react';
import {
    View, Text, StyleSheet, Image,
    FlatList,
} from 'react-native';
import { mainFontColor, thirdFontColor } from '../../utilities/GlobalStyles';

export default function EpisodeHeader(props) {
    return (
        <View style={styles.container}>
            <View style={styles.season}>
                <Image
                    source={{
                        uri: `https://www.themoviedb.org/t/p/w640_and_h360_bestv2${props.Episode.still_path}`
                    }}
                    style={styles.seasonImageImg}
                />

                <View style={styles.info}>
                    <Text style={styles.air_date}>{props.Episode.air_date}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.episode_name}>{props.Episode.episode_number}. {props.Episode.name}</Text>
                        <Text style={styles.episode_ratting}>{props.Episode.vote_average}</Text>
                    </View>
                    <Text style={styles.episode_des}>{props.Episode.overview}</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {

    },
    Comming_soon: {
        color: mainFontColor,
        fontSize: 21,
        marginBottom: 5,
        fontWeight: "700"
    },
    season: {
        backgroundColor: mainFontColor,
        borderRadius: 5,
        marginBottom: 8
    },
    seasonImageImg: {
        width: "100%",
        height: 220,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    info: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: "#e3e3e3",
        borderRadius: 5,
        borderTopWidth: 0
    },
    air_date: {
        fontWeight: '700',
    },
    episode_name: {
        color: "black",
        fontSize: 20,
        fontWeight: "600",
        width: '80%'
    },
    episode_des: {
        color: 'black',
        fontSize: 15,
        marginTop: 15,
        marginBottom: 5
    },
    episode_expand: {
        borderTopWidth: .5,
        borderColor: thirdFontColor,
        textAlign: 'center',
        paddingVertical: 13,
        fontSize: 18,
        color: 'black',
        fontWeight: "700"
    },
    episode_ratting: {
        backgroundColor: "black",
        color: mainFontColor,
        alignSelf: "flex-start",
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginTop: 5,
        borderRadius: 50,
        marginLeft: 13,
        fontWeight: '600'
    }
});