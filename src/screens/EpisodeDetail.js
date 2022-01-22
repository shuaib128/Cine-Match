import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ApiKey } from '../utilities/ApiKey';
import axios from 'axios';
import Footer from '../utilities/Footer';
import EpisodeHeader from '../components/EpisodesDetailcomponents/EpisodeHeader';
import EpidoseCastAndCrew from '../components/EpisodesDetailcomponents/EpidoseCastAndCrew';
import EpisodosImages from '../components/EpisodesDetailcomponents/EpisodosImages';

export default function EpisodeDetail(props) {
    const { episode_number, movie_id, season_num } = props.route.params

    const [Episode, setEpisode] = useState(() => {
        axios.get(`
            https://api.themoviedb.org/3/tv/${movie_id}/season/${season_num}/episode/${episode_number}?api_key=${ApiKey}&language=en-US
        `)
            .then((res) => {
                setEpisode(res.data);
            })
    })

    //Episodes images
    const [images, setimages] = useState(() => {
        axios.get(`
            https://api.themoviedb.org/3/tv/${movie_id}/season/${season_num}/episode/${episode_number}/images?api_key=${ApiKey}&language=en-US
        `)
            .then((res) => {
                setimages(res.data.stills);
            })
    })

    return (
        <View style={styles.container}>
            <ScrollView>
                {Episode ?
                    <EpisodeHeader
                        Episode={Episode}
                    /> :
                    <Text>Loading....</Text>
                }

                {Episode ?
                    <EpidoseCastAndCrew
                        Episode={Episode}
                        navigation={props.navigation}
                    /> :
                    <Text>Loading....</Text>
                }

                {images ?
                    <EpisodosImages
                        images={images}
                    /> :
                    <Text>Loading....</Text>
                }
            </ScrollView>

            <Footer
                navigation={props.navigation}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: '#1f2123',
        flex: 1,
        color: "#fff",
    }
});