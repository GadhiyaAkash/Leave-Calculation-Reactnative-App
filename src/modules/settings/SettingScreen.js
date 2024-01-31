import { Badge, Icon, ListItem, Text, useTheme } from "@rneui/themed"
import React, { useState } from "react"
import { StyleSheet, TextInput, View } from "react-native"


export default SettingScreen = ({ navigation }) => {
    const { theme } = useTheme();
    const list = [
        {
            title: 'My Profile',
            slug: 'profile',
            icon: 'user'
        }
    ]

    const onPressItem = (item) => {
        console.log("item::", item);
    }
    return (
        <View style={styles.container}>
            {
                list.map((item, i) => (
                    <ListItem key={i} bottomDivider containerStyle={styles.listItemContainer} onPress={onPressItem}>
                        <Icon name={item.icon} type="antdesign" size={22}/>
                        <ListItem.Content>
                            <ListItem.Title>{item.title}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron size={22} color={theme.colors.primary}/>
                    </ListItem>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingHorizontal: 15,
        
    },
    listItemContainer: {
        borderRadius: 4
    }
})