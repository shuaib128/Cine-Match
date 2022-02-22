import React, { useState, useCallback } from 'react'
import {
    View, Text, StyleSheet,
    FlatList, TouchableOpacity, Image,
    Dimensions, ScrollView, RefreshControl
} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { mainFontColor, secondFontColor, thirdFontColor } from '../utilities/GlobalStyles'
import ViewAllSkeleton from '../utilities/ViewAllSkeleton'

const { width, height } = Dimensions.get("screen")
export default function WatchListScreen(props) {
    const [Refreshing, setRefreshing] = useState(false)

    //Get all movies from cash
    const [AllMovie, setAllMovie] = useState(() => {
        AsyncStorage.getItem('MovieWatchlist')
            .then((item) => {
                const wishlist = item ? JSON.parse(item) : []
                setAllMovie(wishlist);
            })
    });

    //Get all seres from cash
    const [AllTV, setAllTV] = useState(() => {
        AsyncStorage.getItem('TvWatchlist')
            .then((item) => {
                const wishlist = item ? JSON.parse(item) : []
                setAllTV(wishlist);
            })
    });

    //Movie title and tv titles
    const MovieTitle = () => {
        return (
            <Text style={styles.view_all_name}>Movies To Watch</Text>
        )
    }
    const TVTitle = () => {
        return (
            <Text style={styles.view_all_name}>Series To Watch</Text>
        )
    }

    //Refresh watchlist
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        AsyncStorage.getItem('TvWatchlist')
            .then((item) => {
                const wishlist = item ? JSON.parse(item) : []
                setAllTV(wishlist);
            })

        AsyncStorage.getItem('MovieWatchlist')
            .then((item) => {
                const wishlist = item ? JSON.parse(item) : []
                setAllMovie(wishlist);
            })

        setRefreshing(false)
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={Refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {AllMovie ?
                    <View>
                        <FlatList
                            ListHeaderComponent={() =>
                                AllMovie.length !== 0 ? <MovieTitle /> : <View></View>
                            }
                            numColumns={2}
                            columnWrapperStyle={{ justifyContent: 'space-between' }}
                            keyExtractor={(item, index) => index.toString()}
                            data={AllMovie}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        activeOpacity={.7}
                                        onPress={() => {
                                            props.navigation && props.navigation.push('MovieDetail', {
                                                movie_id: item.id,
                                                movieOrTV: "HomeScreen"
                                            })
                                        }}
                                    >
                                        <View key={item.id.toString()} style={styles.rated_view}>
                                            <View style={styles.movieImage}>
                                                <Image
                                                    source={{
                                                        uri: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"
                                                            + item.poster_path
                                                    }}
                                                    style={[
                                                        StyleSheet.absoluteFillObject
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
                    <ViewAllSkeleton />
                }

                {AllMovie ?
                    <View style={{ marginTop: 30 }}>
                        <FlatList
                            ListHeaderComponent={() =>
                                AllMovie.length !== 0 ? <TVTitle /> : <View></View>
                            }
                            numColumns={2}
                            columnWrapperStyle={{ justifyContent: 'space-between' }}
                            keyExtractor={(item, index) => index.toString()}
                            data={AllTV}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        activeOpacity={.7}
                                        onPress={() => {
                                            props.navigation && props.navigation.push('MovieDetail', {
                                                movie_id: item.id,
                                                movieOrTV: "TVSeresScreen"
                                            })
                                        }}
                                    >
                                        <View key={item.id.toString()} style={styles.rated_view}>
                                            <View style={styles.movieImage}>
                                                <Image
                                                    source={{
                                                        uri: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"
                                                            + item.poster_path
                                                    }}
                                                    style={[
                                                        StyleSheet.absoluteFillObject
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
                    <ViewAllSkeleton />
                }
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: '#1f2123',
        flex: 1,
        color: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    Comming_soon: {
        color: mainFontColor,
        fontSize: 21,
        marginBottom: 15,
        fontWeight: "700"
    },
    rated_view: {
        width: width / 2.25,
        position: 'relative',
        marginBottom: 20
    },
    movieImage: {
        width: "100%",
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
        paddingHorizontal: 20,
        alignItems: 'center',
        marginBottom: 5
    },
    view_all_name: {
        color: mainFontColor,
        fontSize: 23,
        marginBottom: 20,
        fontWeight: '600'
    },
    load_more_btn: {
        marginTop: 10,
        marginBottom: 70,
    },
    load_more_txt: {
        color: "black",
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: secondFontColor,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 15,
        fontWeight: '600',
        borderRadius: 5
    }
});