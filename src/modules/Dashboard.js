import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ paddingBottom: 15 }}>Open up App.tsx to start working on your app!</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Info', {
                    id: 1,
                    name: 'Info page'
                })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  
export default HomeScreen;