import React from 'react'
import { ScrollView, View, TouchableNativeFeedback, StyleSheet } from 'react-native'
import { Octicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import { Text } from '@ui-kitten/components'

const CategoriesSidebar = ({navigation}) => {
    return (
        <ScrollView containerStyle={styles.sidePanel}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('AlatiMasine')}>
            <View style={styles.iconBox}>
                <Octicons name="tools" size={24} color="#555" /> 
                <Text style={styles.iconBoxTitle} >Alati i Mašine</Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Domacinstvo')}>
            <View style={styles.iconBox}>
                <Octicons name="home" size={24} color="#555" /> 
                <Text style={styles.iconBoxTitle} >Domaćinstvo</Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('KeramickePlocice')}>
            <View style={styles.iconBox}>
                <Octicons name="circuit-board" size={24} color="#555" />
                <Text style={styles.iconBoxTitle} >Keramičke pločice i kupatila</Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('GrijanjeKlima')}>
            <View style={styles.iconBox}>
                <MaterialCommunityIcons name="air-filter" size={24} color="#555" />
                <Text style={styles.iconBoxTitle} >Grijanje i klima</Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Kompresori')}>
            <View style={styles.iconBox}>
                <FontAwesome name="compress" size={24} color="#555" />
                <Text style={styles.iconBoxTitle} >Kompresori</Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('BijelaTehnika')}>
            <View style={styles.iconBox}>
                <MaterialCommunityIcons name="washing-machine" size={24} color="#555" />
                <Text style={styles.iconBoxTitle} >Bijela tehnika</Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Vodoinstalacije')}>
            <View style={styles.iconBox}>
                <MaterialCommunityIcons name="cup-water" size={24} color="#555" />
                <Text style={styles.iconBoxTitle} >Vodoinstalacije i oprema</Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('VrtniProgram')}>
            <View style={styles.iconBox}>
                <MaterialCommunityIcons name="flower" size={24} color="#555" />
                <Text style={styles.iconBoxTitle} >Vrtni program</Text>
            </View>
        </TouchableNativeFeedback>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    sidePanel: {
        width: '25%'
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

export default CategoriesSidebar
