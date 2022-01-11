import React, { useState } from 'react'
import {
    View, Text, StyleSheet, ScrollView,

} from 'react-native'
import { ApiKey } from '../utilities/ApiKey'
import axios from 'axios'
import Header from '../components/MovieDetailComponents/Header'
import Descridtions from '../components/MovieDetailComponents/Descridtions'
import Actors from '../components/MovieDetailComponents/Actors'
import Footer from '../utilities/Footer'
import { mainFontColor, secondFontColor } from '../utilities/GlobalStyles'

export default function MovieDetail(props) {
    const { movie_id } = props.route.params

    const [Movie, setMovie] = useState(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${ApiKey}&language=en-US`)
            .then((res) => {
                setMovie(res.data);
            })
    })

    return (
        <View style={styles.container}>
            {Movie ?
                <ScrollView>
                    <Header
                        Movie={Movie}
                    />
                    <View style={styles.movie_bottom}>
                        <Descridtions
                            Movie={Movie}
                        />
                        <Actors
                            Movie={Movie}
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
        color: "#fff",
    },
    movie_bottom:{
        paddingHorizontal: 18,
        paddingVertical: 15
    }
});