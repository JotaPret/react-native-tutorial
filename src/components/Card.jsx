import { View, Text, StyleSheet, Image } from 'react-native'

export default function Card({ image, name, email }) {
    return (
        <View style={styles.card}>
            <View style={styles.logoContainer}>
                <Image 
                    source={{ uri: image }}
                    style={styles.image}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        padding: 20,
        marginBottom: 16,
        width: '90%',
        alignItems: 'center',
        elevation: 3,
        minHeight: 120
    },
    logoContainer: {
        backgroundColor: '#000000',
        width: 90,
        height: 90,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        overflow: 'hidden'
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 8,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 6
    },
    email: {
        fontSize: 14,
        color: '#666666'
    }
})
