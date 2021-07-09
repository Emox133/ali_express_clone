import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Text } from '@ui-kitten/components'

const SupportBoxes = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.flexContainer}>
                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Support')}>
                    <Text style={styles.title} category="c1">
                        Sigurno plaćanje
                    </Text>
                        <View style={styles.imageBox}>
                            <Image style={styles.image} source={require('./../../assets/secure-payments.png')} />
                        </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Support')}>
                    <Text style={styles.title} category="c1">
                        Garancija na povrat novca
                    </Text>
                        <View style={styles.imageBox}>
                            <Image style={styles.image} source={require('./../../assets/money-back.png')} />
                        </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Support')}>
                    <Text style={styles.title} category="c1">
                        24/7 Podrška korisnicima
                    </Text>
                        <View style={styles.imageBox}>
                            <Image style={styles.image} source={require('./../../assets/support.png')} />
                        </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: '90%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    flexContainer: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    box: {
        backgroundColor: '#fafafa',
        width: '32.5%',
        padding: 8,
        borderRadius: 5,
        position: 'relative'
    },
    title: {},
    imageBox: {
        height: 25,
        width: 25,
        position: 'absolute',
        right: 0, 
        bottom: 0,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fafafa'
    },
    image: {
        height: '100%',
        width: '100%'
    }
})

export default SupportBoxes
