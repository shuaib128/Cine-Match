import React from 'react'
import {
    View, Text, StyleSheet, FlatList,
    Image, Dimensions, TouchableOpacity
} from 'react-native'
import { mainFontColor, secondFontColor, thirdFontColor } from '../../../utilities/GlobalStyles'

const { width, height } = Dimensions.get("screen")
export default function Sesons(props) {
    return (
        <View>
            {props.Movie.seasons ? 
                <View style={styles.container}>
                    <Text style={styles.Comming_soon}>Seasons</Text>

                    <FlatList
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={props.Movie.seasons}
                        snapToInterval={width - 36 + 13}
                        decelerationRate="fast"
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.review}>
                                    <View style={styles.seasonImage}>
                                        <Image
                                            source={{
                                                uri: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}
                                            `
                                            }}
                                            style={styles.seasonImageImg}
                                        />
                                    </View>

                                    <View style={styles.seasonDetail}>
                                        <TouchableOpacity
                                            activeOpacity={.7}
                                            onPress={() => {
                                                props.navigation && props.navigation.push('SeasonDetail', {
                                                    movie_id: props.Movie.id,
                                                    season_num: item.season_number
                                                })
                                            }}
                                        >
                                            <Text style={styles.seasonName}>{item.name}</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.seasonYearAndEpidodes}>
                                            {item.air_date && item.air_date.slice(0, 4)} | {item.episode_count} Episodes
                                        </Text>
                                        <Text style={styles.seasonYearAndEpidodesw}>
                                            Season {item.season_number} of the {props.Movie.name} premiered on {item.air_date}
                                        </Text>
                                        <Text style={styles.overview}>{item.overview.slice(0, 80)}...</Text>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View> :
                <View></View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 25
    },
    review: {
        width: width - 36,
        borderRadius: 7,
        marginRight: 13,
        backgroundColor: mainFontColor,
        flexDirection: 'row',
        height: 200,
    },
    seasonImage: {
        width: "40%"
    },
    seasonImageImg: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
    },
    Comming_soon: {
        color: mainFontColor,
        fontSize: 21,
        marginBottom: 15,
        fontWeight: "700"
    },
    seasonDetail: {
        width: "60%",
        padding: 18,
        paddingRight: 3
    },
    seasonName: {
        fontSize: 20,
        color: 'black',
        fontWeight: "700"
    },
    seasonYearAndEpidodes: {
        color: 'black',
        fontWeight: '600'
    },
    seasonYearAndEpidodesw: {
        color: 'black',
        marginTop: 5,
        marginBottom: 5,
    },
    overview: {
        // color: 'black',
        width: "100%"
    }
});