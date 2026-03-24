import { StyleSheet, View, Text } from "react-native"

export default function CardProduct({photo, title, category, price}){
    return (
        <View style={styles.container}>

            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.category}>{category}</Text>
                <Text style={styles.price}>${price.toFixed(2)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: "#6dff1a",
        borderStyle: "solid",
        borderRadius: 20,
        width: 120,
        backgroundColor: "#0b140b",
        shadowColor: "#6dff1a",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.35,
        shadowRadius: 6,
        elevation: 5
    },
    photo:{
        backgroundColor: "#d0eaf1",
        width: 118,
        height: 118,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    textContainer: {
        padding: 8
    },
    title: {
        fontSize: 14,
        fontWeight: "700",
        color: "#ecffe4"
    },
    category: {
        fontSize: 12,
        color: "#a8bfa2"
    },
    price: {
        fontSize: 12,
        color: "#7fff00",
        fontWeight: "700"
    }
})