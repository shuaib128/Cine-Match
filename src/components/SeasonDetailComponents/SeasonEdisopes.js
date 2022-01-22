import React from 'react';
import {
    View, Text, StyleSheet, Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { mainFontColor, secondFontColor, thirdFontColor } from '../../utilities/GlobalStyles';

export default function SeasonEdisopes(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.Comming_soon}>
                Episodes ({props.Season.episodes.length})
            </Text>

            <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={props.Season.episodes}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.season}>
                            <Image
                                source={{
                                    uri: `https://www.themoviedb.org/t/p/w640_and_h360_bestv2${item.still_path}`
                                }}
                                style={styles.seasonImageImg}
                            />

                            <View style={styles.info}>
                                <Text style={styles.air_date}>{item.air_date}</Text>
                                <Text style={styles.episode_name}>{item.episode_number}. {item.name}</Text>
                                <Text style={styles.episode_des}>{item.overview}</Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={.7}
                                onPress={() => {
                                    props.navigation && props.navigation.navigate('EpisodeDetail', {
                                        episode_number: item.episode_number,
                                        movie_id: props.movie_id,
                                        season_num: props.season_num
                                    })
                                }}
                            >
                                <Text style={styles.episode_expand}>Expand</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
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
        fontWeight: "700",
        marginTop: 17
    },
    season: {
        backgroundColor: mainFontColor,
        marginTop: 20,
        borderRadius: 5,
        marginBottom: 8
    },
    seasonImageImg: {
        width: "100%",
        height: 200,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    info: {
        paddingHorizontal: 15,
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
        fontSize: 18,
        fontWeight: "600",
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
    }
});