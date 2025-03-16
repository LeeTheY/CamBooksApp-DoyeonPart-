import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList, } from 'react-native';
import React from 'react';

import IMAGES from '../../assets';


const DATA = new Array(50).fill(0).map((_, index) => ({ id: index }));

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList

                data={DATA}
                // contentContainerStyle={{ paddingTop: 40 }}
                renderItem={() => {
                    return (
                        < TouchableOpacity style={styles.listView} onPress={() => navigation.navigate("HomeDetailPage")}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.photo}></View>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={styles.collegeFont}>서울대</Text>
                                        <Text style={styles.title}>전공책 5개 팝니다~</Text>
                                    </View>
                                    <Text style={styles.priceFont}>30,000원</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 6, }}>
                                        <Image source={IMAGES.REDHEART}
                                            resizeMode='contain'
                                            style={{ height: 15, width: 15, }}>
                                        </Image>
                                        <Text style={styles.iconFont}>30</Text>
                                        <Image source={IMAGES.EYE}
                                            resizeMode='contain'
                                            style={{ height: 18, width: 18, }}>
                                        </Image>
                                        <Text style={styles.iconFont}>50</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }

                }
            />

            < TouchableOpacity
                style={styles.additBtn}
                onPress={() => navigation.navigate("HomePostPage")}>
                <Image
                    source={IMAGES.PLUS}
                    resizeMode='contain'
                    style={{
                        height: 25,
                        width: 25,
                    }} />
            </TouchableOpacity >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    listView: {
        width: 365,
        height: 90,
        backgroundColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#CDCDCD',

    },
    photo: {
        width: 75,
        height: 75,
        marginLeft: 10,
        borderColor: "#E9E9E9",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'orange',
    },
    additBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        backgroundColor: '#59B283',
        borderRadius: 100,
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        shadowRadius: 20,
        position: 'absolute',
        bottom: 30,
        right: 25,
    },
    collegeFont: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'gray',
        marginLeft: 15,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    priceFont: {
        fontSize: 14,
        marginLeft: 15,
        marginTop: 6,
    },
    iconFont: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'gray',
        marginLeft: 5,
        marginRight: 5,
    },
});
