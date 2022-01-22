import React from 'react';
import {
    View, Text, StyleSheet,
    FlatList, TouchableOpacity, Image
} from 'react-native';
import { mainFontColor, thirdFontColor } from '../../utilities/GlobalStyles';

export default function EpidoseCastAndCrew(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.Guest_header_text}>Guest Stars ({props.Episode.guest_stars.length})</Text>
                <TouchableOpacity
                    activeOpacity={.7}
                    onPress={() => {
                        props.navigation && props.navigation.navigate('FullCast', {
                            castAndcrew: props.Episode,
                        })
                    }}
                >
                    <Text style={styles.Guest_cast_text}>Full Cast & Crew</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={props.Episode.guest_stars}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.rated_view}>
                            <Image
                                source={{
                                    uri: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.profile_path}`
                                }}
                                style={styles.seasonImageImg}
                            />

                            <View style={styles.cast_detail}>
                                <TouchableOpacity
                                    activeOpacity={.7}
                                    onPress={() => {
                                        props.navigation && props.navigation.push('PersonScreen', {
                                            person_id: item.id
                                        })
                                    }}
                                >
                                    <Text style={styles.cast_name}>{item.name}</Text>
                                </TouchableOpacity>
                                <Text style={styles.cast_part}>{item.character}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: mainFontColor,
        marginTop: 15,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Guest_header_text: {
        fontSize: 18,
        color: 'black',
        fontWeight: '700'
    },
    Guest_cast_text: {
        fontWeight: '600'
    },
    seasonImageImg: {
        width: 120,
        height: 120,
        borderRadius: 7
    },
    rated_view: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: 15
    },
    cast_detail: {
        marginLeft: 15
    },
    cast_name: {
        color: 'black',
        fontSize: 17,
        fontWeight: "700"
    },
    cast_part: {
        color: 'black',
        fontSize: 15,
    }
});