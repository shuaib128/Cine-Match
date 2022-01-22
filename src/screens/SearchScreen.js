import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { mainFontColor, secondFontColor, thirdFontColor, forthFontColor } from "../utilities/GlobalStyles"
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchResults from '../components/SearchPageComponents/SearchResults';
import axios from 'axios';
import { ApiKey } from '../utilities/ApiKey';

export default function SearchScreen(props) {
    const searchTextInput = useRef();
    const [query, setquery] = useState("");
    const [Movies, setMovies] = useState(null);

    //Auto fouces on text input upon entering
    useEffect(() => {
        searchTextInput.current.focus();
    }, [])

    useEffect(() => {
        if (query !== "") {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&page=1&include_adult=true&query=${query}`)
                .then((res) => {
                    setMovies(res.data.results);
                })
        }
    }, [query])


    return (
        <View style={styles.container}>
            <View style={styles.search_block}>
                <Ionicons
                    style={styles.searchIcon}
                    name="search"
                    size={22}
                    color={secondFontColor}
                />

                <TextInput
                    placeholder='Search title, category, ect...'
                    placeholderTextColor={thirdFontColor}
                    style={styles.search_input}
                    onChangeText={(text) => {
                        setquery(text)
                    }}
                    ref={searchTextInput}
                />
            </View>

            <SearchResults
                Movies={Movies}
                query={query}
                navigation={props.navigation}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    search_input: {
        fontSize: 15,
        color: thirdFontColor,
    },
    searchIcon: {
        width: "8%",
        marginLeft: 18
    },
    search_block: {
        backgroundColor: forthFontColor,
        width: "100%",
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: "hidden",
        marginBottom: 15
    },
    container: {
        position: 'relative',
        backgroundColor: 'black',
        flex: 1,
        color: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 20
    },
});