import React from 'react'
import { StyleSheet, View, FlatList, ScrollView } from 'react-native'
import { Text } from '@ui-kitten/components'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useData } from './../../context/DataContext'
import OrderItem from '../shop/OrderItem'
import PaypalScreen from './../shop/PayPalPayment'

const Order = () => {
    const { cart, totalAmount } = useData()
    const withTax = Number((17 / 100) * totalAmount).toFixed(0)
    const withoutTax = Number(totalAmount - ((17 / 100) * totalAmount)).toFixed(0)
    const total = Number(+withoutTax + +withTax).toFixed(0)
    const deliveryDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

    return (
        <>
            <View style={styles.priceChangedWarningBox}>
                <Text style={styles.priceChangedText}>
                    Cijene proizvoda na ovoj stranici mogu biti drugačije
                    od onih koje ste vidjeli ranije. To je zbog toga što na cijenu
                    utiče PDV.
                </Text>
            </View>

            <View style={styles.paymentMethodBox}>
                <MaterialIcons name="payment" size={24} color="#000" />
                <Text style={styles.paymentMethodText}>Izaberite način plaćanja</Text>
            </View>

            {/* WORKAROUND // FIX LATER */}
            <ScrollView contentContainerStyle={styles.paymentDetails}>
                <View style={styles.paymentOrderIconBox}>
                    <MaterialCommunityIcons name="order-bool-descending-variant" size={24} color="#000" />
                    <Text style={styles.paymentMethodText}>Narudžba</Text>
                </View>

                <View style={styles.paymentProductMainContainer}>
                    <FlatList
                        data={cart}
                        renderItem={item => <OrderItem itemData={item} />}
                        keyExtractor={item => item.id.toString()}
                    />

                    <Text style={{marginLeft: 20}}>Očekujte narudžbu do <Text style={{ fontWeight: 'bold' }}>{`${deliveryDate.getDate()}/${deliveryDate.getMonth()}`}</Text></Text>

                    <View style={styles.totalSummaryBox}>
                        <View style={styles.pricingRowFirst}>
                            <Text>Bez PDV-a</Text>
                            <Text>${withoutTax}</Text>
                        </View>

                        <View style={styles.pricingRowFirst}>
                            <Text>PDV (17%)</Text>
                            <Text>${withTax}</Text>
                        </View>

                        <View style={styles.pricingRowFirst}>
                            <Text style={{ fontWeight: 'bold' }}>Ukupno</Text>
                            <Text style={{ fontWeight: 'bold' }}>${total}</Text>
                        </View>
                    </View>
                    <PaypalScreen />
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    priceChangedWarningBox: {
        padding: 10,
        backgroundColor: '#eee'
    },
    priceChangedText: {
        color: '#999',
        fontSize: 13,
        lineHeight: 20
    },
    paymentMethodBox: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        backgroundColor: '#fafafa',
        marginVertical: 5,
        paddingHorizontal: 20,
        elevation: 3
    },
    paymentOrderIconBox: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginBottom: 10
    },
    paymentMethodText: {
        marginLeft: 10
    },
    paymentDetails: {
        paddingVertical: 10,
        backgroundColor: '#fafafa',
        elevation: 3
    },
    paymentProductMainContainer: {},
    totalSummaryBox: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    pricingRowFirst: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    }
})

export default Order
