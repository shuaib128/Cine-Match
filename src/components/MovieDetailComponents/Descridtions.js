import React, { useState, useEffect } from 'react'
import {
    View, Text, StyleSheet, TouchableOpacity,
    Linking, Share
} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import { mainFontColor, secondFontColor, thirdFontColor } from '../../utilities/GlobalStyles'
import ExtraInfoBlock from './ExtraInfoBlock'
import TvseresCreatorsName from './TvDetails/TvseresCreatorsName'
import AsyncStorage from '@react-native-async-storage/async-storage';

//Convert time to h/m/s from s
function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    if (rhours !== 0) {
        return rhours + "h " + rminutes + "m";
    } else {
        return rminutes + "m";
    }
}

//Convert number to currency (Thougent, Million, Billion)
function numFormatter(num) {
    if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(1) + 'K';
    } else if (num > 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num < 900) {
        return num;
    }
}


export default function Descridtions(props) {
    const [MovieWishListID, setMovieWishListID] = useState();
    const [TVWishListID, setTVWishListID] = useState();
    const crew = props.CastAndCrew.crew

    //Set Movie ids at render
    useEffect(() => {
        loaded()
    }, [])

    //Load saved movies and ids
    const loaded = async () => {
        try {
            let MovieWatchListID = await AsyncStorage.getItem("MovieWatchlistID")
            let TvWatchlistID = await AsyncStorage.getItem("TvWatchlistID")

            if (MovieWatchListID !== null) {
                setMovieWishListID(MovieWatchListID)
            }

            if (TvWatchlistID !== null) {
                setTVWishListID(TvWatchlistID)
            }
        } catch (error) {

        }
    }

    //Saving function
    const save = async () => {
        try {
            if (props.movieOrTV === "HomeScreen") {
                AsyncStorage.getItem("MovieWatchlist")
                    .then((item) => {
                        const wishlist = item ? JSON.parse(item) : []
                        wishlist.push(props.Movie)
                        AsyncStorage.setItem("MovieWatchlist", JSON.stringify(wishlist))
                    })
            }
            else if (props.movieOrTV === "TVSeresScreen") {
                AsyncStorage.getItem("TvWatchlist")
                    .then((item) => {
                        const wishlist = item ? JSON.parse(item) : []
                        wishlist.push(props.Movie)
                        AsyncStorage.setItem("TvWatchlist", JSON.stringify(wishlist))
                    })
            }
        } catch (error) {

        }
    }

    //Save id function
    const saveID = async () => {
        try {
            if (props.movieOrTV === "HomeScreen") {
                AsyncStorage.getItem("MovieWatchlistID")
                    .then((item) => {
                        const movieWatchlistID = item ? JSON.parse(item) : []
                        movieWatchlistID.push(props.Movie.id)
                        setMovieWishListID(movieWatchlistID)
                        AsyncStorage.setItem("MovieWatchlistID", JSON.stringify(movieWatchlistID))
                    })
            }
            else if (props.movieOrTV === "TVSeresScreen") {
                AsyncStorage.getItem("TvWatchlistID")
                    .then((item) => {
                        const movieWatchlistID = item ? JSON.parse(item) : []
                        movieWatchlistID.push(props.Movie.id)
                        setTVWishListID(movieWatchlistID)
                        AsyncStorage.setItem("TvWatchlistID", JSON.stringify(movieWatchlistID))
                    })
            }
        } catch (error) {

        }
    }

    //Remove function
    const remove = async () => {
        try {
            if (props.movieOrTV === "HomeScreen") {
                let watchLists = await AsyncStorage.getItem("MovieWatchlist")
                watchLists = JSON.parse(watchLists)
                AsyncStorage.getItem("MovieWatchlistID")
                    .then((item) => {
                        const wishlist = item ? JSON.parse(item) : []

                        if (wishlist.indexOf(props.Movie.id) !== -1) {
                            watchLists.splice(wishlist.indexOf(props.Movie.id), 1)
                            wishlist.splice(wishlist.indexOf(props.Movie.id), 1)
                        }
                        setMovieWishListID(wishlist)
                        AsyncStorage.setItem('MovieWatchlistID', JSON.stringify(wishlist))
                        AsyncStorage.setItem('MovieWatchlist', JSON.stringify(watchLists))
                    })
            }

            else if (props.movieOrTV === "TVSeresScreen") {
                let watchLists = await AsyncStorage.getItem("TvWatchlist")
                watchLists = JSON.parse(watchLists)
                AsyncStorage.getItem("TvWatchlistID")
                    .then((item) => {
                        const wishlist = item ? JSON.parse(item) : []

                        if (wishlist.indexOf(props.Movie.id) !== -1) {
                            watchLists.splice(wishlist.indexOf(props.Movie.id), 1)
                            wishlist.splice(wishlist.indexOf(props.Movie.id), 1)
                        }
                        setTVWishListID(wishlist)
                        AsyncStorage.setItem('TvWatchlistID', JSON.stringify(wishlist))
                        AsyncStorage.setItem('TvWatchlist', JSON.stringify(watchLists))
                    })
            }
        } catch (error) {

        }
    }

    //handle saving id to asyicstorage
    const watchlistAddHandler = () => {
        save()
        saveID()
    }

    const watchlistRemoveHandler = () => {
        remove()
    }

    //Share handler
    const onShare = async (movie_url) => {
        try {
            const result = await Share.share({
                message: movie_url
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

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
                    <Text style={styles.runtime}>
                        {
                            props.Movie.runtime ? timeConvert(props.Movie.runtime) :
                                props.Movie.episode_run_time ? timeConvert(props.Movie.episode_run_time) :
                                    ""
                        }
                    </Text>
                    <Text style={styles.runtime}>18+</Text>
                </View>

                <View style={styles.add_message}>
                    {MovieWishListID && MovieWishListID.includes(props.Movie.id) || TVWishListID && TVWishListID.includes(props.Movie.id) ?
                        <TouchableOpacity
                            activeOpacity={.7}
                            onPress={watchlistRemoveHandler}
                        >
                            <Ionicons
                                style={styles.searchIcon}
                                name="trash-outline"
                                size={23}
                                color={mainFontColor}
                            />
                        </TouchableOpacity> :
                        <TouchableOpacity
                            activeOpacity={.7}
                            onPress={watchlistAddHandler}
                        >
                            <Ionicons
                                style={styles.searchIcon}
                                name="add-circle-outline"
                                size={23}
                                color={mainFontColor}
                            />
                        </TouchableOpacity>
                    }

                    <TouchableOpacity
                        activeOpacity={.7}
                    >
                        <Ionicons
                            style={styles.searchIconRight}
                            name="paper-plane-outline"
                            size={23}
                            color={mainFontColor}
                            onPress={() => onShare(props.Movie.homepage)}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.title}>
                {
                    props.Movie.title ? props.Movie.title :
                        props.Movie.name ? props.Movie.name :
                            ''
                }
            </Text>
            <Text style={styles.homepage}
                onPress={() => Linking.openURL(props.Movie.homepage)}
            >
                Visit homepage
            </Text>
            <Text style={styles.des}>{props.Movie.overview}</Text>

            <View style={styles.extra_infos}>
                {props.Movie.created_by ?
                    <TvseresCreatorsName
                        kei="Director"
                        link={false}
                        value={
                            props.Movie.created_by.map((charcter) => {
                                return (`${charcter.name}  |  `);
                            })
                        }
                    /> :
                    <ExtraInfoBlock
                        kei="Director"
                        link={false}
                        value={
                            crew.map((charcter) => {
                                if (charcter.job === "Director") {
                                    return (charcter.name);
                                }
                            })
                        }
                    />
                }

                <ExtraInfoBlock
                    kei="Release Date"
                    link={false}
                    value={
                        props.Movie.release_date ? props.Movie.release_date :
                            props.Movie.first_air_date ? props.Movie.first_air_date :
                                ''
                    }
                />

                <ExtraInfoBlock
                    kei="Status"
                    link={false}
                    value={props.Movie.status}
                />

                {props.Movie.tagline ?
                    <ExtraInfoBlock
                        kei="Tagline"
                        link={false}
                        value={props.Movie.tagline}
                    /> :
                    <View></View>
                }

                {props.Movie.budget !== 0 && props.Movie.budget !== undefined ?
                    <ExtraInfoBlock
                        kei="Buget"
                        link={false}
                        value={`$${numFormatter(props.Movie.budget)}`}
                    /> :
                    <View></View>
                }

                {props.Movie.revenue !== 0 && props.Movie.revenue !== undefined ?
                    <ExtraInfoBlock
                        kei="Revenue"
                        link={false}
                        value={`$${numFormatter(props.Movie.revenue)}`}
                    /> :
                    <View></View>
                }
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
        padding: 9,
        paddingHorizontal: 14,
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
    homepage: {
        color: mainFontColor,
        borderBottomColor: mainFontColor,
        borderBottomWidth: 1,
        width: 85,
        fontSize: 12,
        marginBottom: 5
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
    extra_infos: {
        marginTop: 10
    }
});