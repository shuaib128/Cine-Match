import React from 'react'
import {
    View, Text, StyleSheet,
    FlatList, Image, Dimensions, TouchableOpacity
} from 'react-native'
import { mainFontColor, secondFontColor } from '../../utilities/GlobalStyles'
import Ionicons from "react-native-vector-icons/Ionicons"

const { width, height } = Dimensions.get("screen")

export default function NowPlayingMovies(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.Comming_soon}>Trending This Week</Text>
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={props.NowPlayingMovie}
                snapToInterval={width - 40 + 15}
                decelerationRate="fast"
                renderItem={({ item }) => {
                    return (
                        <View key={item.id.toString()} style={styles.NowMovie}>
                            <View style={styles.nowup}>
                                <View style={styles.reviewblock}>
                                    <Ionicons
                                        style={styles.searchIcon}
                                        name="star"
                                        size={13}
                                        color={secondFontColor}
                                    />
                                    <Text style={styles.vote_average}>{item.vote_average}</Text>
                                </View>
                                <Text style={styles.release_date}>
                                    {item.release_date ? item.release_date : item.first_air_date}
                                </Text>
                            </View>

                            <Image
                                source={{
                                    uri: "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces"
                                        + item.poster_path
                                }}
                                style={styles.movieImage}
                            />

                            <TouchableOpacity
                                activeOpacity={.7}
                                onPress={() => {
                                    props.navigation && props.navigation.push('MovieDetail', {
                                        movie_id: item.id,
                                        movieOrTV: props.screen_name
                                    })
                                }}
                            >
                                <Text
                                    style={[
                                        styles.original_title
                                    ]}
                                >
                                    {item.original_title ? item.original_title : item.name}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    NowMovie: {
        position: 'relative',
        marginRight: 15
    },
    container: {
        paddingHorizontal: 20,
        marginTop: 3,
        marginBottom: 10,
    },
    movieImage: {
        width: width - 40,
        height: 210,
        borderRadius: 3,
        resizeMode: "cover",
    },
    original_title: {
        color: mainFontColor,
        position: 'absolute',
        fontSize: 17,
        fontWeight: "600",
        bottom: 12,
        left: 15,
        width: "80%",
        textShadowColor: 'rgba(0, 0, 0, 0.80)',
        textShadowOffset: { width: -2, height: 2 },
        textShadowRadius: 10
    },
    Comming_soon: {
        color: mainFontColor,
        fontSize: 21,
        marginBottom: 15,
        fontWeight: "700",
    },
    vote_average: {
        color: mainFontColor,
        marginLeft: 5
    },
    nowup: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center'

    },
    reviewblock: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "black",
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    release_date: {
        marginLeft: 7,
        backgroundColor: secondFontColor,
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 5,
        color: "black",
        fontWeight: '500'
    }
});