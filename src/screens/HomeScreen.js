import React, { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import axios from 'axios'
import { ApiKey } from "../utilities/ApiKey"
import UpNav from '../components/HomeScreenComponents/UpNav'
import Footer from '../utilities/Footer'
import NowPlayingMovies from '../components/HomeScreenComponents/NowPlayingMovies'
import TopRated from '../components/HomeScreenComponents/TopRated'
import TrendingSkeletonLoder from '../utilities/TrendingSkeletonLoder'
import MoveListingSkeleton from '../utilities/MoveListingSkeleton'
import Ctegoryes from '../components/HomeScreenComponents/Ctegoryes'

export default function HomeScreen(props) {
    const [NowPlayingMovie, setNowPlayingMovie] = useState(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${ApiKey}`)
            .then((res) => {
                setNowPlayingMovie(res.data.results);
            })
    })

    const [TopRatedMovie, setTopRatedMovie] = useState(() => {
        axios.get(`
        https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=1`)
            .then((res) => {
                setTopRatedMovie(res.data.results);
            })
    })

    const [Populur, setPopulur] = useState(() => {
        axios.get(`
        https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`)
            .then((res) => {
                setPopulur(res.data.results);
            })
    })

    const [UpComming, setUpComming] = useState(() => {
        axios.get(`
        https://api.themoviedb.org/3/movie/upcoming?api_key=${ApiKey}&language=en-US&page=1`)
            .then((res) => {
                setUpComming(res.data.results);
            })
    })

    return (
        <View style={styles.container}>
            <ScrollView style={{ paddingBottom: 120 }}>
                <UpNav
                    navigation={props.navigation}
                />

                {NowPlayingMovie ?
                    <NowPlayingMovies
                        NowPlayingMovie={NowPlayingMovie}
                        navigation={props.navigation}
                    /> :
                    <TrendingSkeletonLoder />
                }

                <Ctegoryes
                    movie_tv="movie"
                    navigation={props.navigation}
                />

                {Populur ?
                    <TopRated
                        title="Popular"
                        query="popular"
                        movie_tv="movie"
                        TopRatedMovie={Populur}
                        navigation={props.navigation}
                    /> :
                    <MoveListingSkeleton />
                }
                {TopRatedMovie ?
                    <TopRated
                        title="Top Rated"
                        query="top_rated"
                        movie_tv="movie"
                        TopRatedMovie={TopRatedMovie}
                        navigation={props.navigation}
                    /> :
                    <MoveListingSkeleton />
                }
                {UpComming ?
                    <TopRated
                        title="Upcomming"
                        query="upcoming"
                        movie_tv="movie"
                        TopRatedMovie={UpComming}
                        navigation={props.navigation}
                    /> :
                    <MoveListingSkeleton />
                }
            </ScrollView>

            <Footer 
                navigation={props.navigation}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: '#1f2123',
        flex: 1,
        color: "#fff",
    },
});