import React, { useState, useEffect, useRef } from 'react';
import {
    View, Text, StyleSheet, TextInput, Image,
    useWindowDimensions
} from 'react-native';
import { mainFontColor, secondFontColor, thirdFontColor, forthFontColor } from "../utilities/GlobalStyles"
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchResults from '../components/SearchPageComponents/SearchResults';
import SearchTv from '../components/SearchPageComponents/SearchTv';
import SearchPerson from '../components/SearchPageComponents/SearchPerson';
import axios from 'axios';
import { ApiKey } from '../utilities/ApiKey';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

export default function SearchScreen(props) {
    const layout = useWindowDimensions();
    const searchTextInput = useRef();
    const [query, setquery] = useState("");
    const [Movies, setMovies] = useState(null);
    const [Tv, setTv] = useState(null);
    const [Person, setPerson] = useState(null);

    //Render all the scenes
    const renderScene = SceneMap({
        first: () => <SearchResults
            Movies={Movies}
            query={query}
            navigation={props.navigation}
        />,
        second: () => <SearchTv
            Movies={Tv}
            query={query}
            navigation={props.navigation}
        />,
        third: () => <SearchPerson
            Movies={Person}
            query={query}
            navigation={props.navigation}
        />,
    });

    //Set the screens indexes and screens title
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Movies' },
        { key: 'second', title: 'TV' },
        { key: 'third', title: 'Persons' },
    ]);

    //Auto fouces on text input upon entering
    useEffect(() => {
        searchTextInput.current.focus();
    }, [])

    useEffect(() => {
        //Get movies
        var CancelToken = axios.CancelToken;
        var cancel;
        if (query !== "") {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&page=1&include_adult=true&query=${query}`)
                .then((res) => {
                    setMovies(res.data.results);
                })
        }

        //Get tv
        if (query !== "") {
            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${ApiKey}&language=en-US&page=1&include_adult=true&query=${query}`)
                .then((res) => {
                    setTv(res.data.results);
                })
        }

        //Get Person
        if (query !== "") {
            axios.get(`https://api.themoviedb.org/3/search/person?api_key=${ApiKey}&language=en-US&page=1&include_adult=true&query=${query}`)
                .then((res) => {
                    setPerson(res.data.results);
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

            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={
                    props => <TabBar {...props} style={{
                        backgroundColor: 'black'
                    }} />
                }
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