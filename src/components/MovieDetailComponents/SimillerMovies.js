import React, { useRef } from 'react'
import {
    View, Text, TouchableOpacity, StyleSheet,
    Dimensions, Animated
} from 'react-native'
import { mainFontColor, secondFontColor, thirdFontColor } from '../../utilities/GlobalStyles'
import { useRoute } from '@react-navigation/native'
import Ionicons from "react-native-vector-icons/Ionicons"

const { width, height } = Dimensions.get("screen")

export default function SimillerMovies(props) {
    const route = useRoute();

    return (
        <View>
            {props.TopRatedMovie.length !== 0 ?
                <View style={styles.container}>
                    <View style={styles.list_heading}>
                        <Text style={styles.Comming_soon}>{props.title}</Text>

                        {route.name !== "PersonScreen" ?
                            <TouchableOpacity
                                activeOpacity={.7}
                                onPress={() => {
                                    props.navigation && props.navigation.navigate('ViewAll', {
                                        movie_tv: props.movie_tv,
                                        screen_name: props.title,
                                        query: props.query,
                                        query_name: props.screen_name,
                                        movieID: props.movieID
                                    })
                                }}
                            >
                                <Text style={styles.view_all}>VIEW ALL</Text>
                            </TouchableOpacity> :
                            <View></View>
                        }
                    </View>

                    <Animated.FlatList
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToInterval={width / 2.9}
                        decelerationRate="fast"
                        data={props.TopRatedMovie}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    activeOpacity={.7}
                                    onPress={() => {
                                        props.navigation && props.navigation.push('MovieDetail', {
                                            movie_id: item.id,
                                            movieOrTV: props.screen_name
                                        })
                                    }}
                                >
                                    <View key={item.id.toString()} style={styles.rated_view}>
                                        <View style={styles.movieImage}>
                                            <Animated.Image
                                                source={{
                                                    uri: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"
                                                        + item.poster_path
                                                }}
                                                style={[
                                                    StyleSheet.absoluteFillObject,
                                                    {
                                                        resizeMode: 'cover',
                                                        borderRadius: 10,
                                                    }
                                                ]}
                                            />
                                        </View>

                                        <TouchableOpacity
                                            activeOpacity={.7}
                                        >
                                            <Text style={styles.original_title}>
                                                {item.title ? item.title.slice(0, 17) : item.name.slice(0, 17)}...
                                            </Text>
                                        </TouchableOpacity>

                                        <View style={styles.reviewblock}>
                                            <Ionicons
                                                style={styles.searchIcon}
                                                name="star"
                                                size={13}
                                                color={secondFontColor}
                                            />
                                            <Text style={styles.vote_average}>{item.vote_average}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
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
        marginTop: 25,
    },
    Comming_soon: {
        color: mainFontColor,
        fontSize: 21,
        marginBottom: 15,
        fontWeight: "700"
    },
    rated_view: {
        marginHorizontal: 7,
        position: 'relative',
    },
    movieImage: {
        width: 180,
        height: 240,
        overflow: 'hidden',
        borderRadius: 10,
    },
    original_title: {
        color: mainFontColor,
        fontSize: 17,
        fontWeight: "500",
        textAlign: 'center',
        marginTop: 10
    },
    reviewblock: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "black",
        paddingVertical: 7,
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: "center",
        width: 60,
        marginTop: 5
    },
    vote_average: {
        color: mainFontColor,
        marginLeft: 5
    },
    view_all: {
        color: thirdFontColor,
        fontSize: 12
    },
    list_heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 13,
        paddingRight: 7,
        alignItems: 'center',
        marginBottom: 5
    }
});