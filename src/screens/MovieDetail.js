import React, { useState } from 'react'
import {
    View, StyleSheet, ScrollView,

} from 'react-native'
import { ApiKey } from '../utilities/ApiKey'
import axios from 'axios'
import Header from '../components/MovieDetailComponents/Header'
import Descridtions from '../components/MovieDetailComponents/Descridtions'
import Cast from '../components/MovieDetailComponents/Cast'
import Reviews from '../components/MovieDetailComponents/Reviews'
import Images from '../components/MovieDetailComponents/Images'
import Videos from '../components/MovieDetailComponents/Videos'
import SimillerMovies from '../components/MovieDetailComponents/SimillerMovies'
import Sesons from '../components/MovieDetailComponents/TvDetails/Sesons'
import Footer from '../utilities/Footer'

//Preloaders
import HeaderSkeleton from '../components/DetalMovieSkeleton/HeaderSkeleton'
import DescriptionSkeleton from '../components/DetalMovieSkeleton/DescriptionSkeleton'
import CastSkeleton from '../components/DetalMovieSkeleton/CastSkeleton'
import ReviewSkeleton from '../components/DetalMovieSkeleton/ReviewSkeleton'

export default function MovieDetail(props) {
    const { movie_id, movieOrTV } = props.route.params

    const [Movie, setMovie] = useState(() => {
        axios.get(`
            https://api.themoviedb.org/3/${movieOrTV === "HomeScreen" ? "movie" : "tv"}/
            ${movie_id}?api_key=${ApiKey}&language=en-US
        `)
            .then((res) => {
                setMovie(res.data);
            })
    })

    const [CastAndCrew, setCastAndCrew] = useState(() => {
        axios.get(`
            https://api.themoviedb.org/3/${movieOrTV === "HomeScreen" ? "movie" : "tv"}/
            ${movie_id}/credits?api_key=${ApiKey}&language=en-US
        `)
            .then((res) => {
                setCastAndCrew(res.data);
            })
    })

    const [Reviewes, setReviews] = useState(() => {
        axios.get(`
            https://api.themoviedb.org/3/${movieOrTV === "HomeScreen" ? "movie" : "tv"}/
            ${movie_id}/reviews?api_key=${ApiKey}&language=en-US
        `)
            .then((res) => {
                setReviews(res.data);
            })
    })

    const [Backdrops, setBackdrops] = useState(() => {
        axios.get(`
            https://api.themoviedb.org/3/${movieOrTV === "HomeScreen" ? "movie" : "tv"}/
            ${movie_id}/images?api_key=a7763028e85029af229da16b6a38b9c5
        `)
            .then((res) => {
                setBackdrops(res.data);
            })
    })

    const [Videos_, setVideos_] = useState(() => {
        axios.get(`
            https://api.themoviedb.org/3/${movieOrTV === "HomeScreen" ? "movie" : "tv"}/
            ${movie_id}/videos?api_key=a7763028e85029af229da16b6a38b9c5&language=en-US
        `)
            .then((res) => {
                setVideos_(res.data);
            })
    })

    const [SimmilerMove, setSimmilerMove] = useState(() => {
        axios.get(`
            https://api.themoviedb.org/3/${movieOrTV === "HomeScreen" ? "movie" : "tv"}/
            ${movie_id}/similar?api_key=a7763028e85029af229da16b6a38b9c5&language=en-US
        `)
            .then((res) => {
                setSimmilerMove(res.data.results);
            })
    })

    const [RecomendedMovie, setRecomendedMovie] = useState(() => {
        axios.get(`
            https://api.themoviedb.org/3/${movieOrTV === "HomeScreen" ? "movie" : "tv"}/
            ${movie_id}/recommendations?api_key=a7763028e85029af229da16b6a38b9c5&language=en-US
        `)
            .then((res) => {
                setRecomendedMovie(res.data.results);
            })
    })

    return (
        <View style={styles.container}>
            <ScrollView>
                {Movie ?
                    <Header
                        Movie={Movie}
                    /> :
                    <HeaderSkeleton />
                }
                <View style={styles.movie_bottom}>
                    {Movie && CastAndCrew ?
                        <Descridtions
                            CastAndCrew={CastAndCrew}
                            Movie={Movie}
                            movieOrTV={movieOrTV}
                            navigation={props.navigation}
                        /> :
                        <DescriptionSkeleton />
                    }

                    {Movie && CastAndCrew ?
                        <Cast
                            CastAndCrew={CastAndCrew}
                            Movie={Movie}
                            navigation={props.navigation}
                        /> :
                        <CastSkeleton />
                    }

                    {Reviewes ?
                        <Reviews
                            Reviewes={Reviewes}
                            navigation={props.navigation}
                        /> :
                        <ReviewSkeleton />
                    }

                    {Backdrops ?
                        <Images
                            Backdrops={Backdrops}
                        /> :
                        <ReviewSkeleton />
                    }

                    {Movie ?
                        <Sesons
                            Movie={Movie}
                            navigation={props.navigation}
                        />:
                        <View></View>
                    }

                    {Videos_ ?
                        <Videos
                            Videos_={Videos_}
                        /> :
                        <ReviewSkeleton />
                    }

                    {SimmilerMove ?
                        <SimillerMovies
                            title="Similar"
                            query="similar"
                            movie_tv="movie"
                            TopRatedMovie={SimmilerMove}
                            navigation={props.navigation}
                            screen_name={movieOrTV}
                            movieID={movie_id}
                        /> :
                        <CastSkeleton />
                    }

                    {RecomendedMovie ?
                        <SimillerMovies
                            title="Recommendation"
                            query="recommendations"
                            movie_tv="movie"
                            TopRatedMovie={RecomendedMovie}
                            navigation={props.navigation}
                            screen_name={movieOrTV}
                            movieID={movie_id}
                        /> :
                        <CastSkeleton />
                    }
                </View>
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
    movie_bottom: {
        paddingHorizontal: 18,
        paddingVertical: 15,
        paddingBottom: 40
    }
});