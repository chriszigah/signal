import React, { useLayoutEffect, useState, useEffect} from 'react'
import {StatusBar} from "expo-status-bar"
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons"

// Components
import { CustomLIstItem } from "../components/CustomLIstItem"
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'


export default function HomeScreen({ navigation }) {

    const [chats, setChats] = useState("")

    const newChat = [
        {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
            },
            {
            userId: 1,
            id: 2,
            title: "quis ut nam facilis et officia qui",
            completed: false
            },
            {
            userId: 1,
            id: 3,
            title: "fugiat veniam minus",
            completed: false
            },
            {
            userId: 1,
            id: 4,
            title: "et porro tempora",
            completed: true
            },
            {
            userId: 1,
            id: 5,
            title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
            completed: false
            },
            {
            userId: 1,
            id: 6,
            title: "qui ullam ratione quibusdam voluptatem quia omnis",
            completed: false
            },
            {
            userId: 1,
            id: 7,
            title: "illo expedita consequatur quia in",
            completed: false
            },
            {
            userId: 1,
            id: 8,
            title: "quo adipisci enim quam ut ab",
            completed: true
            },
            {
            userId: 1,
            id: 9,
            title: "molestiae perspiciatis ipsa",
            completed: false
            },
            {
            userId: 1,
            id: 10,
            title: "illo est ratione doloremque quia maiores aut",
            completed: true
            }
    ]

    const signOutUser = () => {
        console.log('User Sign Out')
    }

    useEffect(() => {
        // fetch chats from db 
    }, [])

      
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle : { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black"},
            headerTintColor: "black",
            headerLeft: () => (
                <View style={{ marginLeft: 20}}>
                  <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                  <Avatar rounded source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTSliwHz0lADpFI9fuG4Aow2Jeo0Gl-gtq08-jrl-YyYr5gt7-lLuimR4sOojzTtzQDsc&usqp=CAU"}}/>
                  </TouchableOpacity>
                  </View>),

            headerRight: () => (
                <View style={styles.headerRight}>
                  <TouchableOpacity activeOpacity={0.5}>
                   <AntDesign  name='camerao' size={24} color='black'/>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("AddChat")}>
                  <SimpleLineIcons name="pencil" size={24} color="black"/>
                  </TouchableOpacity>
                </View>
            )
        })
      
    }, [navigation])

    return (
        <SafeAreaView>
            <ScrollView>
            {newChat.map(({ id, title }) => (
                <CustomLIstItem id={id} chatName={title} key={id}/>
            ))}

            </ScrollView>
        </SafeAreaView>
    )}

const styles = StyleSheet.create({
    container: {},
    headerRight: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: 80,
        marginRight: 20
    }
})
