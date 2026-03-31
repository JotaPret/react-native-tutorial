import { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Image, Animated, Easing } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';


  export default function Header(){

    const router = useRouter()
    return (
        <View style={styles.container}>
          <View>
            <FontAwesome style={styles.logo} name="users" size={26} color="#e7612b" />
            <Text>Omnirolex</Text>
          </View>
          <Ionicons name="person-add-outline" size={24} color="white" onPress={() => router.push('/cadastrar')} />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    backgroundColor: "#000000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 10
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginRight: 5
  },
  title: {
    color: "#21ac33",
    fontSize: 20,
    fontWeight: "bold"
  }
})