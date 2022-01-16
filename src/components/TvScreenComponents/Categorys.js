import React from 'react'
import {
    View, Text, StyleSheet,
    ScrollView, TouchableOpacity
} from 'react-native'
import { mainFontColor, secondFontColor } from '../../utilities/GlobalStyles'

const genres = {
    10759: "Action & Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    10762: "Kids",
    9648: "Mystery",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics",
    37: "Western"
}

export default function Categorys(props) {
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
                                query: cat,
                                query_name: props.screen_name
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
    cat_text_hiligted:{
        backgroundColor: secondFontColor,
        color: "black",
        fontWeight: '600',
        marginHorizontal: 2,
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    }
});