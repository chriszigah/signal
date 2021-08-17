import { dumpToBuffer } from 'bser'
import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input } from "react-native-elements"
import Icon from "react-native-vector-icons/FontAwesome"

const AddChat = ({ navigation }) => {
    const [input, setInput] = useState("")

    useLayoutEffect(() => {
       navigation.setOptions({
           title: 'Add a new chat',
           headerBackTitle: "Chats"
       })
    }, [])

    const createChat = async () => {
        // create a new chat to database
    }

    return (
        <View style={styles.container}>
            <Input  placeholder='Enter a chat name' value={input} onChangeText={(text) => setInput(text)}
            leftIcon = {<Icon name="wechat" type="antdesign" size={24} color="black"/>}
             />
             <Button onPress={createChat} title='Create new Chat' />
        </View>
    )
}

export default AddChat

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        height: "100%"

    }
})
