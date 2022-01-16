import React, { useState } from 'react'
import {
    View, Text, StyleSheet, ScrollView,
} from 'react-native'
import axios from 'axios'
import { ApiKey } from '../utilities/ApiKey'
import Header from '../components/PersonCompoments/Header'
import SimillerMovies from '../components/MovieDetailComponents/SimillerMovies'
import HeaderSkeleton from '../components/DetalMovieSkeleton/HeaderSkeleton'
import CastSkeleton from '../components/DetalMovieSkeleton/CastSkeleton'
import Footer from '../utilities/Footer'

export default function PersonScreen(props) {
    const { person_id } = props.route.params

    const [Person, setPerson] = useState(() => {
        axios.get(`https://api.themoviedb.org/3/person/${person_id}?api_key=${ApiKey}&language=en-US`)
            .then((res) => {
                setPerson(res.data);
            })
    })

    const [ExternalIDS, setExternalIDS] = useState(() => {
        axios.get(`https://api.themoviedb.org/3/person/${person_id}/external_ids?api_key=${ApiKey}&language=en-US`)
            .then((res) => {
                setExternalIDS(res.data);
            })
    })

    const [PopulerMoie, setPopulerMoie] = useState(() => {
        axios.get(`https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=${ApiKey}&language=en-US`)
            .then((res) => {
                setPopulerMoie(res.data);
            })
    })

    const [PopulerTV, setPopulerTV] = useState(() => {
        axios.get(`https://api.themoviedb.org/3/person/${person_id}/tv_credits?api_key=${ApiKey}&language=en-US`)
            .then((res) => {
                setPopulerTV(res.data);
            })
    })

    return (
        <View style={styles.container}>
            <ScrollView>
                {Person && ExternalIDS ?
                    <Header
                        Person={Person}
                        ExternalIDS={ExternalIDS}
                    /> :
                    <HeaderSkeleton />
                }

                {PopulerMoie ?
                    <SimillerMovies
                        title="Know For (Movies)"
                        query="top_rated"
                        movie_tv="movie"
                        TopRatedMovie={PopulerMoie.cast}
                        navigation={props.navigation}
                        screen_name="HomeScreen"
                    /> :
                    <CastSkeleton />
                }

                {PopulerTV ?
                    <SimillerMovies
                        title="Know For (TV)"
                        query="top_rated"
                        movie_tv="movie"
                        TopRatedMovie={PopulerTV.cast}
                        navigation={props.navigation}
                        screen_name="TVSeresScreen"
                    /> :
                    <CastSkeleton />
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
    }
});