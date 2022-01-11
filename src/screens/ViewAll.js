import React, { useState } from 'react'
import {
    View, Text, StyleSheet,
    FlatList, TouchableOpacity, Image,
    ActivityIndicator
} from 'react-native'
import axios from 'axios'
import { ApiKey } from '../utilities/ApiKey'
import Ionicons from "react-native-vector-icons/Ionicons"
import { mainFontColor, secondFontColor, thirdFontColor } from '../utilities/GlobalStyles'
import ViewAllSkeleton from '../utilities/ViewAllSkeleton'

export default function ViewAll(props) {
    const { movie_tv, screen_name, query } = props.route.params
    const [pageNumber, setpageNumber] = useState(1)
    const [IsLoading, setIsLoading] = useState(false)

    const [AllMovie, setAllMovie] = useState(() => {
        axios.get(`https://api.themoviedb.org/3/${movie_tv}/${query}?api_key=${ApiKey}&language=en-US&page=${pageNumber}`)
            .then((res) => {
                setAllMovie(res.data.results)
            })
    })

    const loadMoreMovies = () => {
        setpageNumber((prevstate) => prevstate + 1)
        setIsLoading(true)

        if (pageNumber !== 1) {
            axios.get(`https://api.themoviedb.org/3/${movie_tv}/${query}?api_key=${ApiKey}&language=en-US&page=${pageNumber}`)
                .then((res) => {
                    setAllMovie(e => {
                        return [...new Set([...e, ...res.data.results])]
                    })
                })
                .then(() => setIsLoading(false))
        } else {
            setpageNumber((prevstate) => prevstate + 1)
            axios.get(`https://api.themoviedb.org/3/${movie_tv}/${query}?api_key=${ApiKey}&language=en-US&page=2`)
                .then((res) => {
                    setAllMovie(e => {
                        return [...AllMovie, ...res.data.results]
                    })
                })
                .then(() => setIsLoading(false))
        }
    }

    const LoadeMoreButton = () => {
        return (
            <View>
                {!IsLoading ?
                    <TouchableOpacity
                        activeOpacity={.7}
                        onPress={loadMoreMovies}
                    >
                        <View style={styles.load_more_btn}>
                            <Text style={styles.load_more_txt}>Load More</Text>
                        </View>
                    </TouchableOpacity> :

                    <View style={styles.load_more_btn}>
                        <ActivityIndicator size="large" color={secondFontColor}/>
                    </View>
                }
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <Text style={styles.view_all_name}>{screen_name}</Text>

            {AllMovie ?
                <View>
                    <FlatList
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        keyExtractor={(item, index) => index.toString()}
                        data={AllMovie}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    activeOpacity={.7}
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
                                                {item.title ? item.title.slice(0, 17) : item.original_name.slice(0, 17)}...
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
                        ListFooterComponent={() => <LoadeMoreButton />}
                    />
                </View> :
                <ViewAllSkeleton />
            }
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
        position: 'relative',
        marginBottom: 20
    },
    movieImage: {
        width: 175,
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