import React from 'react'
import {
    View, Text, StyleSheet, FlatList,
    Image, TouchableOpacity
} from 'react-native'
import { mainFontColor, thirdFontColor } from '../../utilities/GlobalStyles'

export default function Cast(props) {
    const crew = props.CastAndCrew.cast

    return (
        <View style={styles.container}>
            <Text style={styles.Comming_soon}>Top Billed Cast</Text>

            <FlatList
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={crew}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.actor}>
                            <Image
                                source={{
                                    uri: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"
                                        + item.profile_path
                                }}
                                style={styles.actorImage}
                            />

                            <View style={styles.actor_des}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.charector}>{item.character}</Text>
                            </View>
                        </View>
                    )
                }}
            />
            <TouchableOpacity
                activeOpacity={.7}
                onPress={() => {
                    props.navigation && props.navigation.navigate('FullCast', {
                        castAndcrew: props.CastAndCrew,
                    })
                }}
            >
                <Text style={styles.loadallcast}>Full Cast & Crew</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },
    actorImage: {
        width: 150,
        height: 160,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    actor: {
        borderRadius: 7,
        marginRight: 13,
        backgroundColor: mainFontColor
    },
    actor_des: {
        width: 150,
        paddingHorizontal: 14,
        paddingTop: 10,
        paddingBottom: 10
    },
    name: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700'
    },
    charector: {
        fontSize: 14,
    },
    Comming_soon: {
        color: mainFontColor,
        fontSize: 21,
        marginBottom: 15,
        fontWeight: "700"
    },
    loadallcast:{
        color: mainFontColor,
        marginTop: 10
    }
});