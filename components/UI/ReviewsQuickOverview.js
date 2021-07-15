import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from '@ui-kitten/components'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const StarFilledIcon = () => (
    <Ionicons name="star" size={15} color="yellow" />
)

const StarEmptyIcon = () => (
    <Ionicons name="star-outline" size={15} color="yellow" />
)

const ReviewsQuickOverview = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.titleTextBox}>
                <Text style={styles.title}>Ocjene kupaca (548)</Text>
                <View style={styles.reviewBox}>
                    <Text>4.6 / 5</Text>
                    <StarFilledIcon />
                    <StarFilledIcon />
                    <StarFilledIcon />
                    <StarFilledIcon />
                    <StarFilledIcon />
                </View>
            </View>

            <View style={styles.reviewContainer}>
                <View style={styles.reviewedOnBox}>
                    <Text style={styles.reviewerName}>Leo Salvatore</Text>
                    <Text style={styles.reviewedDate}>14 Jul 2021</Text>
                </View>

                <View style={styles.reviewStarsBox}>
                    <StarFilledIcon />
                    <StarFilledIcon />
                    <StarFilledIcon />
                    <StarFilledIcon />
                    <StarEmptyIcon />
                </View>

                <View style={styles.reviewDescriptionBox}>
                    <Text category="c1" style={styles.reviewDescription}>
                        Lorem ipsum dolor sir amet
                        Lorem ipsum dolor sir amet
                        Lorem ipsum dolor sir amet
                        Lorem ipsum dolor sir amet
                        Lorem ipsum dolor sir amet
                    </Text>
                </View>

                <View style={styles.viewAllBtnBox}>
                    <View>
                        <Text style={{fontSize: 11}} status="info">View All</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 400,
        padding: 10,
        backgroundColor: '#fff',
        marginVertical: 20
    },
    titleTextBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    reviewBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    reviewContainer: {},
    reviewedOnBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8
    },
    reviewStarsBox: {
        flexDirection: 'row',
        marginLeft: 10
    },
    reviewDescriptionBox: {
        marginTop: 5
    },
    viewAllBtnBox: {
        alignItems: 'flex-start',
        marginTop: 5
    }
})

export default ReviewsQuickOverview
