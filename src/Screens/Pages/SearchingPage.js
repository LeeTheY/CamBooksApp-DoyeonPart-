import { StyleSheet, View, TouchableOpacity, Image, SafeAreaView, Text } from 'react-native';
import React from 'react';

import IMAGES from '../../../assets';

const DATA = new Array(5).fill(0).map((_, index) => ({ id: index }));


export default function SearchingPage({ navigation }) {
    return (
        <View style={styles.container}>

            <SafeAreaView />
            <View style={styles.topView}>
                <TouchableOpacity onPress={() => navigation.navigate("RouteScreen")} style={{ marginLeft: 15 }}>
                    <Image
                        source={IMAGES.BACK}
                        resizeMode="contain"
                        tintColor="#474747"
                        style={{ width: 25, height: 25 }}
                    />
                </TouchableOpacity>
            </View>
            <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 15 }}>
                검색</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    topView: {
        backgroundColor: 'white',
        width: '100%',
        height: '10%',
        justifyContent: 'center',
    },
});
