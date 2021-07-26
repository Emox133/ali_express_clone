import React from 'react'
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { Text, Button } from '@ui-kitten/components'
import { Ionicons } from '@expo/vector-icons'

const AuthenticateScreen = (props) => {
    return (
        <View style={styles.screen}>
            <View style={styles.mainContainer}>
                <View style={styles.flexProfilePictureBox}>
                    <View style={styles.imgBox}>
                        <Image style={styles.img} source={require('./../../assets/default-profile.png')} />
                    </View>
                    <TouchableWithoutFeedback onPress={() => props.navigation.navigate('LoginSignup')} style={styles.signInBox}>
                        <Text style={styles.signInText}>Prijava</Text>
                    </TouchableWithoutFeedback>
                </View>

                <TouchableWithoutFeedback onPress={() => props.navigation.navigate('LoginSignup')}>
                    <View style={styles.ordersContainer}>
                        <View style={styles.ordersTitleFlex}>
                            <Text category="h6" style={{ fontWeight: 'bold' }}>
                                Narudžbe
                            </Text>
                            <Text style={{fontWeight: 'bold'}} category="c2">
                                Vidi sve
                            </Text>
                        </View>

                        <View style={styles.ordersIconsBoxContainer}>
                            <View style={styles.ordersIconBox}>
                                <Ionicons name="star-outline" size={25} color='#FF6721' />
                                <Text style={{ fontSize: 12 }}>Unpaid</Text>
                            </View>
                            <View style={styles.ordersIconBox}>
                                <Ionicons name="star-outline" size={25} color='#FF6721' />
                                <Text style={{ fontSize: 12 }}>Unpaid</Text>
                            </View>
                            <View style={styles.ordersIconBox}>
                                <Ionicons name="star-outline" size={25} color='#FF6721' />
                                <Text style={{ fontSize: 12 }}>Unpaid</Text>
                            </View>
                            <View style={styles.ordersIconBox}>
                                <Ionicons name="star-outline" size={25} color='#FF6721' />
                                <Text style={{ fontSize: 12 }}>Unpaid</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <View style={styles.newStuffContainer}>
                    <View style={styles.newStuffTitleBox}>
                        <Ionicons name="cart-outline" size={23} color="#e52613"/>
                        <Text status="danger" category="s2" style={{marginLeft: 5}}>NOVE STVARI</Text>
                    </View>

                    <View style={styles.flexNewStuff}>
                        <View style={styles.newStuffBox}>
                            <View style={styles.newStuffImgBox}>
                                <Image style={styles.newStuffImg} source={{uri: 'https://zh-zola.ba/wp-content/uploads/2020/06/4007340-1.jpg'}} />
                            </View>
                            <Button style={styles.newStuffBtn} size="tiny" status="danger">-99%</Button>
                        </View>
                        <View style={styles.newStuffBox}>
                            <View style={styles.newStuffImgBox}>
                                <Image style={styles.newStuffImg} source={{uri: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80'}} />
                            </View>
                            <Button style={styles.newStuffBtn} size="tiny" status="danger">-99%</Button>
                        </View>
                        <View style={styles.newStuffBox}>
                            <View style={styles.newStuffImgBox}>
                                <Image style={styles.newStuffImg} source={{uri: 'https://zh-zola.ba/wp-content/uploads/2020/12/tesla_smartphone_6_3_200x300_mpi_1_1114541.jpg'}} />
                            </View>
                            <Button style={styles.newStuffBtn} size="tiny" status="danger">-99%</Button>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    mainContainer: {
        paddingHorizontal: 10
    },
    flexProfilePictureBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    imgBox: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        marginRight: 20
    },
    img: {
        height: '100%',
        width: '100%',
        borderRadius: 60 / 2
    },
    signInBox: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 100,
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    signInText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    ordersContainer: {
        padding: 10,
        backgroundColor: '#fff',
        marginTop: 20
    },
    ordersTitleFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    ordersIconsBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },
    ordersIconBox: {
        alignItems: 'center',
    },

    // NEW STUFF CONTAINER // CONTINUE FROM HERE
    newStuffContainer: {
        backgroundColor: '#fff',
        elevation: 2,
        paddingVertical: 10,
        marginTop: 10
    },
    newStuffTitleBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    flexNewStuff: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    newStuffBox: {
        marginBottom: 25
    },
    newStuffImgBox: {
        height: 100,
        width: 100,
        position: 'relative'
    },
    newStuffImg: {
        height: '100%',
        width: '100%'
    },
    newStuffBtn: {
        position: 'absolute',
        width: '80%',
        height: 27,
        bottom: -10,
        transform: [{translateX: 10}],
        borderRadius: 15
    }
})

export default AuthenticateScreen
