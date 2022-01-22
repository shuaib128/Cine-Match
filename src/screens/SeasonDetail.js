import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ApiKey } from '../utilities/ApiKey';
import axios from 'axios';
import SeasonHeader from '../components/SeasonDetailComponents/SeasonHeader';
import Footer from '../utilities/Footer';
import SeasonEdisopes from '../components/SeasonDetailComponents/SeasonEdisopes';

export default function SeasonDetail(props) {
    const { movie_id, season_num } = props.route.params

    const [Season, setSeason] = useState(() => {
        axios.get(`https://api.themoviedb.org/3/tv/${movie_id}/season/${season_num}?api_key=${ApiKey}&language=en-US`)
            .then((res) => {
                setSeason(res.data);
            })
    })

    return (
        <View style={styles.container}>
            <ScrollView>
                {Season ?
                    <SeasonHeader
                        Season={Season}
                    /> :
                    <Text>Loading....</Text>
                }

                <View style={styles.season_bottom}>
                    {Season ?
                        <SeasonEdisopes
                            Season={Season}
                            movie_id={movie_id}
                            season_num={season_num}
                            navigation={props.navigation}
                        /> :
                        <Text>Loading....</Text>
                    }
                </View>
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
    },
    season_bottom: {
        marginTop: 27,
        paddingHorizontal: 15
    }
});