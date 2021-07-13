import React from 'react'
import {View, StyleSheet, ScrollView, TouchableNativeFeedback} from 'react-native'
import { Text } from '@ui-kitten/components'
import CategoryPlaceholder from '../../components/shop/CategoryPlaceholder'
import { Octicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

const CategoriesScreen = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.flexContainer}>
                <ScrollView containerStyle={styles.sidePanel}>
                    <TouchableNativeFeedback>
                        <View style={styles.iconBox}>
                            <Octicons name="tools" size={24} color="#555" /> 
                            <Text style={styles.iconBoxTitle} >Alati i Mašine</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <View style={styles.iconBox}>
                            <Octicons name="home" size={24} color="#555" /> 
                            <Text style={styles.iconBoxTitle} >Domaćinstvo</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <View style={styles.iconBox}>
                            <Octicons name="circuit-board" size={24} color="#555" />
                            <Text style={styles.iconBoxTitle} >Keramičke pločice i kupatila</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <View style={styles.iconBox}>
                            <MaterialCommunityIcons name="air-filter" size={24} color="#555" />
                            <Text style={styles.iconBoxTitle} >Grijanje i klima</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <View style={styles.iconBox}>
                            <FontAwesome name="compress" size={24} color="#555" />
                            <Text style={styles.iconBoxTitle} >Kompresori</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <View style={styles.iconBox}>
                            <MaterialCommunityIcons name="washing-machine" size={24} color="#555" />
                            <Text style={styles.iconBoxTitle} >Bijela tehnika</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <View style={styles.iconBox}>
                            <MaterialCommunityIcons name="cup-water" size={24} color="#555" />
                            <Text style={styles.iconBoxTitle} >Vodoinstalacije i oprema</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <View style={styles.iconBox}>
                            <MaterialCommunityIcons name="flower" size={24} color="#555" />
                            <Text style={styles.iconBoxTitle} >Vrtni program</Text>
                        </View>
                    </TouchableNativeFeedback>
                </ScrollView>

                <View style={styles.categoryPanel}>
                    <Text category="h6" style={{fontWeight: 'bold', marginLeft: 10}}>Preporučene Kategorije</Text>
                    <CategoryPlaceholder />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    flexContainer: {
        flexDirection: 'row'
    },
    sidePanel: {
        width: '25%'
    },
    categoryPanel: {
        width: '75%'
    },
    iconBox: {
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#fff',
        elevation: 1,
        paddingVertical: 10
    },
    iconBoxTitle: {
        textAlign: 'center',
        fontSize: 12
    }
})

export default CategoriesScreen
