import React from 'react';
import {
    View, Text, StyleSheet, FlatList,
    Image, TouchableOpacity, Keyboard
} from 'react-native';
import sharingan from "./sharingan.gif"

export default function SearchPerson(props) {
    if (!props.Movies && props.query !== "") return (
        <View style={{ alignItems: "center", marginTop: 50 }}>
            <Image source={sharingan} />
            <Text style={{ fontSize: 20, color: "white" }}>Loading....</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            {props.query !== "" ?
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    onScroll={Keyboard.dismiss}
                    data={props.Movies && props.Movies}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.actor}>
                                <Image
                                    source={{
                                        uri: "https://www.themoviedb.org/t/p/w260_and_h390_bestv2"
                                            + item.profile_path
                                    }}
                                    style={styles.actorImage}
                                />

                                <View style={styles.info}>
                                    <TouchableOpacity
                                        activeOpacity={.7}
                                        onPress={() => {
                                            props.navigation && props.navigation.push('PersonScreen', {
                                                person_id: item.id
                                            })
                                        }}
                                    >
                                        <Text style={styles.original_title}>{item.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                /> :
                <View></View>
            }
        </View>
    );
}


const styles = StyleSheet.create({
    info: {
        width: "65%",
        paddingHorizontal: 15
    },
    original_title: {
        color: "black",
        fontSize: 19,
        fontWeight: "600",
        marginTop: 20
    },
    release_date: {

    },
    overview: {
        color: "black",
        marginTop: 10,
        width: "100%"
    },
    actor: {
        backgroundColor: "white",
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
    },
    actorImage: {
        width: "35%",
        height: 180,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    container: {

    },
});