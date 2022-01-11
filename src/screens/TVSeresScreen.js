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
import Categorys from '../components/TvScreenComponents/Categorys'

export default function TVSeresScreen(props) {
    const [NowPlayingMovie, setNowPlayingMovie] = useState(() => {
        axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${ApiKey}`)
            .then((res) => {
                setNowPlayingMovie(res.data.results);
            })
    })

    const [TopRatedMovie, setTopRatedMovie] = useState(() => {
        axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${ApiKey}&language=en-US&page=1`)
            .then((res) => {
                setTopRatedMovie(res.data.results);
            })
    })

    const [Populur, setPopulur] = useState(() => {
        axios.get(`
        https://api.themoviedb.org/3/tv/popular?api_key=${ApiKey}&language=en-US&page=1`)
            .then((res) => {
                setPopulur(res.data.results);
            })
    })

    const [UpComming, setUpComming] = useState(() => {
        axios.get(`
        https://api.themoviedb.org/3/tv/on_the_air?api_key=${ApiKey}&language=en-US&page=1`)
            .then((res) => {
                setUpComming(res.data.results);
            })
    })

    const [AiringToday, setAiringToday] = useState(() => {
        axios.get(`
        https://api.themoviedb.org/3/tv/airing_today?api_key=${ApiKey}&language=en-US&page=1`)
            .then((res) => {
                setAiringToday(res.data.results);
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
                    /> :
                    <TrendingSkeletonLoder />
                }

                <Categorys
                    movie_tv="movie"
                    navigation={props.navigation}
                />

                {Populur ?
                    <TopRated
                        title="Popular"
                        TopRatedMovie={Populur}
                        movie_tv="tv"
                        navigation={props.navigation}
                        query="popular"
                    /> :
                    <MoveListingSkeleton />
                }
                {TopRatedMovie ?
                    <TopRated
                        title="Top Rated"
                        TopRatedMovie={TopRatedMovie}
                        movie_tv="tv"
                        navigation={props.navigation}
                        query="top_rated"
                    /> :
                    <MoveListingSkeleton />
                }
                {UpComming ?
                    <TopRated
                        title="Upcomming"
                        TopRatedMovie={UpComming}
                        movie_tv="tv"
                        navigation={props.navigation}
                        query="on_the_air"
                    /> :
                    <MoveListingSkeleton />
                }
                {AiringToday ?
                    <TopRated
                        title="Airing Today"
                        TopRatedMovie={AiringToday}
                        movie_tv="tv"
                        navigation={props.navigation}
                        query="airing_today"
                    /> :
                    <MoveListingSkeleton />
                }
            </ScrollView>

            <Footer />
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