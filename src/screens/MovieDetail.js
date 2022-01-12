import React, { useState } from 'react'
import {
    View, Text, StyleSheet, ScrollView,

} from 'react-native'
import { ApiKey } from '../utilities/ApiKey'
import axios from 'axios'
import Header from '../components/MovieDetailComponents/Header'
import Descridtions from '../components/MovieDetailComponents/Descridtions'
import Cast from '../components/MovieDetailComponents/Cast'
import Reviews from '../components/MovieDetailComponents/Reviews'
import Footer from '../utilities/Footer'

export default function MovieDetail(props) {
    const { movie_id } = props.route.params

    const [Movie, setMovie] = useState(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${ApiKey}&language=en-US`)
            .then((res) => {
                setMovie(res.data);
            })
    })

    const [CastAndCrew, setCastAndCrew] = useState(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${ApiKey}&language=en-US`)
            .then((res) => {
                setCastAndCrew(res.data);
            })
    })

    const [Reviewes, setReviews] = useState(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${ApiKey}&language=en-US`)
            .then((res) => {
                setReviews(res.data);
            })
    })

    return (
        <View style={styles.container}>
            {Movie && CastAndCrew ?
                <ScrollView>
                    <Header
                        Movie={Movie}
                    />
                    <View style={styles.movie_bottom}>
                        <Descridtions
                            CastAndCrew={CastAndCrew}
                            Movie={Movie}
                        />
                        <Cast
                            CastAndCrew={CastAndCrew}
                            Movie={Movie}
                            navigation={props.navigation}
                        />
                        <Reviews
                            Reviewes={Reviewes}
                            navigation={props.navigation}
                        />
                    </View>
                </ScrollView> :
                <Text>Loading..</Text>
            }
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
        color: "#fff"
    },
    movie_bottom: {
        paddingHorizontal: 18,
        paddingVertical: 15,
        paddingBottom: 40
    }
});