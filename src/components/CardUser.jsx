import { StyleSheet, View, Text } from "react-native"
import { Image } from "expo-image"
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function CardUser({id, avatar, name, email, users, setUsers}) {
    const handleDelete = async () => {
        const response = await fetch(`http://localhost:3333/user/${id}`,{
            method: "DELETE"
        })
        const data = await response?.json()
        if(response.ok){
            console.log("Usuário deletado com sucesso", data)
            const newUser = users.filter((user) => user.id !== id)
            setUsers(newUser)
        }else{
            console.error("Erro ao deletar usuário", data)

        }
    }

    return (
        <View style={styles.container}>
            <Image 
                style={styles.avatar}
                //source={require("../../assets/adaptive-icon.png")} // Imagem local, pasta assets
                source={avatar} // Imagem externa, url
            />
            <View style={styles.actions}>
                <Ionicons name="trash" size={20} color="white" style={styles.trash} onPress={handleDelete}/>
                <FontAwesome6 name="edit" size={24} color="white"/>
            </View>
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: "#d1d1d1",
        borderStyle: "solid",
        borderRadius: 20,
        flexDirection: "row",
        padding: 16,
        gap: 10,
        marginBottom: 20,
        width: "80%",
    },
    avatar:{
        backgroundColor: "#d0eaf1",
        borderRadius: 20, 
        width: 40,
        height: 40
    },
    name: {
        fontSize: 16,
        fontWeight: "700",
        color: "#86d3ad"
    },
    email: {
        fontSize: 14,
        color: "#ffffff"
    },
    actions: {
        position: "absolute",
        right: 14,
        top: 14,
        flexDirection: "row",
        gap: 14,
        alignItems: "center",
        justifyContent: "center"
    },
    trash: {
        marginBottom: 2
    }
})