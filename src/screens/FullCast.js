import React from 'react'
import {
    View, Text, StyleSheet, FlatList,
    Image, ScrollView, TouchableOpacity
} from 'react-native'
import { mainFontColor } from '../utilities/GlobalStyles'

export default function FullCast(props) {
    const { castAndcrew } = props.route.params

    return (
        <ScrollView>
            <View style={styles.container}>
                {castAndcrew.cast ?
                    <View style={styles.cast}>
                        <FlatList
                            ListHeaderComponent={
                                <Text style={styles.view_all_name}>
                                    Cast {castAndcrew.cast && castAndcrew.cast.length}
                                </Text>
                            }
                            keyExtractor={(item) => item.id.toString()}
                            numColumns={2}
                            columnWrapperStyle={{ justifyContent: 'space-between' }}
                            data={castAndcrew.cast && castAndcrew.cast}
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
                                            <TouchableOpacity
                                                activeOpacity={.7}
                                                onPress={() => {
                                                    props.navigation && props.navigation.push('PersonScreen', {
                                                        person_id: item.id
                                                    })
                                                }}
                                            >
                                                <Text style={styles.name}>{item.name}</Text>
                                            </TouchableOpacity>
                                            <Text style={styles.charector}>{item.character}</Text>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </View>:
                    <View></View>
                }

                <View style={[styles.cast, styles.crew]}>
                    <FlatList
                        ListHeaderComponent={
                            <Text style={styles.view_all_name}>
                                Cast {castAndcrew.crew.length}
                            </Text>
                        }
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        data={castAndcrew.crew}
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
                                        <TouchableOpacity
                                            activeOpacity={.7}
                                            onPress={() => {
                                                props.navigation && props.navigation.push('PersonScreen', {
                                                    person_id: item.id
                                                })
                                            }}
                                        >
                                            <Text style={styles.name}>{item.name}</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.charector}>{item.job}</Text>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: '#1f2123',
        flex: 1,
        color: "#fff",
        paddingHorizontal: 17,
        paddingVertical: 10,
        height: "100%"
    },
    cast: {

    },
    actor: {
        borderRadius: 7,
        backgroundColor: "white",
        marginTop: 20
    },
    actorImage: {
        width: 168,
        height: 130,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
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
    view_all_name: {
        color: mainFontColor,
        fontSize: 23,
        marginBottom: 5,
        fontWeight: '600'
    },
    crew: {
        marginTop: 30
    }
});