import React, { useState, useCallback, useRef } from 'react'
import {
    View, Text, StyleSheet,
    FlatList, Dimensions, Button,
    Alert, TouchableOpacity
} from 'react-native'
import { mainFontColor, secondFontColor, thirdFontColor } from '../../utilities/GlobalStyles'
import YoutubePlayer from 'react-native-youtube-iframe';

const { width, height } = Dimensions.get("screen")
export default function Videos(props) {
    const [playing, setPlaying] = useState(false)

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, [])

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.Comming_soon}>Videos</Text>

            <FlatList
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={props.Videos_.results}
                snapToInterval={width - 36 + 13}
                decelerationRate="fast"
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={togglePlaying}>
                            <View style={styles.video}>
                                <YoutubePlayer
                                    height={200}
                                    play={playing}
                                    videoId={item.key}
                                    onChangeState={onStateChange}
                                />
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 25
    },
    Comming_soon: {
        color: mainFontColor,
        fontSize: 21,
        marginBottom: 15,
        fontWeight: "700"
    },
    video: {
        width: width - 36,
        borderRadius: 7,
        marginRight: 13
    }
});