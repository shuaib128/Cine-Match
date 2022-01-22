import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { mainFontColor, thirdFontColor } from '../../utilities/GlobalStyles';

const { width, height } = Dimensions.get("screen")
export default function EpisodosImages(props) {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
            >
                {
                    props.images.map((image) => (
                        <View>
                            <Image
                                source={{
                                    uri: `https://www.themoviedb.org/t/p/w320_and_h180_bestv2${image.file_path}`
                                }}
                                style={styles.seasonImageImg}
                            />
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        paddingLeft: 20,
        paddingVertical: 15
    },
    seasonImageImg: {
        width: width - 40,
        height: 210,
        marginRight: 20,
        resizeMode: "cover"
    }
});