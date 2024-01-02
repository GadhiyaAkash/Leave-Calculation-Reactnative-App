import { Button, Card, Icon, Text } from "@rneui/themed";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

function HomeScreen({ navigation }) {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f1-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        }
    ];
    return (
        <FlatList
            data={DATA}
            numColumns={2}
            renderItem={({ item }) =>
                <View style={styles.container}>
                    <Card>
                        <Card.Title>HELLO WORLD</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={{ padding: 0 }}
                            source={{
                                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                            }}
                        />
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component
                            structure than actual design.
                        </Text>
                        <Button
                            icon={
                                <Icon
                                    name="code"
                                    color="#ffffff"
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                            buttonStyle={{
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0,
                            }}
                            title="VIEW NOW"
                        />
                    </Card>
                </View>
            }
            keyExtractor={item => item.id}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '50%'
    },
});


export default HomeScreen;