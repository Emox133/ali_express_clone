import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Text } from '@ui-kitten/components'

const SupportScreenDetails = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.flexContainer}>
                <View style={styles.paneLeft}>
                    <Text category="h5" style={{fontWeight: 'bold'}}>Dobrodošli u</Text>
                    <Text category="h4" style={{fontWeight: 'bold'}} status="danger">ZH ZOLA!</Text>
                    <Text category="c1">Vaša avantura počinje upravo ovdje</Text>
                </View>

                <View style={styles.paneRight}>
                    <View style={styles.imageBox}>
                        <Image style={styles.image} source={require('./../../assets/support-hero.png')} />
                    </View>
                </View>
            </View>

            <Text category="h5" style={styles.mainHeader}>Kupuj sa sigurnošću</Text>

            <View style={styles.flexContainer}>
                <View style={styles.secondContainer}>
                    <View style={styles.paneSecondLeft}>
                        <Text category="h6" style={{fontWeight: 'bold'}}>Plaćaj sigurno</Text>
                        <Text category="c2">
                            ZhZola štiti vaše transakcijske informacije.
                            Način plačanja je jako zaštićen i mi nikada 
                            nećemo dijeliti vaše finansijske detalje sa 
                            prodavačima. Olakšajte sebi kupovinu sa korak
                            ispred konkurencije razvijenom mobilnom aplikacijom!
                        </Text>
                    </View>

                    <View style={styles.paneSecondRight}>
                        <View style={styles.imageBox}>
                            <Image style={styles.image} source={require('./../../assets/card-money-back.png')} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.flexContainer}>
                <View style={styles.secondContainer}>
                    <View style={styles.paneThirdLeft}>
                        <View style={styles.imageBox}>
                            <Image style={styles.image} source={require('./../../assets/online-shopping.png')} />
                        </View>
                    </View>

                    <View style={styles.paneThirdRight}>
                        <Text category="h6" style={{fontWeight: 'bold'}}>Povrat novca</Text>
                        <Text category="c2">
                            Naša metoda povrata novca pokriva više od 
                            milion artikala. Vraćamo vaš novac natrag
                            ako artikal koji ste kupili nije onakav kakvim
                            se opisuje ili ako nije dostavljen u dogovorenom
                            roku.
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff'
    },
    flexContainer: {
        flexDirection: 'row'
    },
    secondContainer: {
        flexDirection: 'row',
        marginTop: 30
    },
    paneLeft: {
        marginTop: 20,
        marginLeft: 10
    },
    paneSecondLeft: {
        width: '50%',
        marginLeft: 10
    },
    paneThirdLeft: {
        width: '50%'
    },
    paneThirdRight: {
        width: '50%'
    },
    paneSecondRight: {
        width: '50%'
    },
    imageBox: {
        width: 160,
        height: 160,
        marginLeft: 10
    },
    image: {
        height: '100%',
        width: '100%'
    },
    mainHeader: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 30
    }
})

SupportScreenDetails.navigationOptions = {
    headerTitle: '',
    headerStyle: {
        backgroundColor: '#fafafa'
    }
}

export default SupportScreenDetails
