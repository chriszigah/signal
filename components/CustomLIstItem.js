import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

const CustomLIstItem = ({ id, chatName, enterChat }) => {
    return (
        <ListItem>
            <Avatar rounded source={{ uri : `https://robohash.org/${id}`}} />
        <ListItem.Content>
           <ListItem.Title sytle={{ fontWeight: 800}}>
              Youtube Chat
           </ListItem.Title>
           <ListItem.Subtitle numberOfLines={1}
           ellipsizeMode="tail"
           >
           {chatName}
           </ListItem.Subtitle>
        </ListItem.Content>
        </ListItem>
    )
}

export { CustomLIstItem };

const styles = StyleSheet.create({})


