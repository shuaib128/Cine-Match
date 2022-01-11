import React from 'react'
import {
    View, Text, StyleSheet,
    ScrollView, TouchableOpacity
} from 'react-native'
import { mainFontColor, secondFontColor } from '../../utilities/GlobalStyles'
import { useRoute } from '@react-navigation/native'

const genres = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
}

export default function Ctegoryes(props) {
    const route = useRoute();

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity
                    activeOpacity={.7}
                >
                    <Text
                        style={[
                            styles.cat_text_hiligted
                        ]}
                    >
                        All
                    </Text>
                </TouchableOpacity>
                {Object.values(genres).map((cat, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={.7}
                        onPress={() => {
                            props.navigation && props.navigation.navigate('ViewAllCategory', {
                                movie_tv: props.movie_tv,
                                screen_name: cat,
                                query: cat
                            })
                        }}
                    >
                        <Text
                            style={[
                                styles.cat_text
                            ]}
                        >
                            {cat}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 20,
        marginTop: 13,
        marginBottom: 5
    },
    cat_text: {
        color: mainFontColor,
        marginHorizontal: 2,
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    cat_text_hiligted: {
        backgroundColor: secondFontColor,
        color: "black",
        fontWeight: '600',
        marginHorizontal: 2,
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    }
});