import { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Image, Animated, Easing } from 'react-native'

const carregadoImage = require('../../assets/carregado.png')
const descarregadoImage = require('../../assets/descarregado.webp')

export default function Header() {
  const colorAnim = useRef(new Animated.Value(0)).current
  const [isCarregado, setIsCarregado] = useState(true)

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(colorAnim, {
          toValue: 1,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false
        }),
        Animated.timing(colorAnim, {
          toValue: 0,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false
        })
      ])
    )

    animation.start()

    return () => {
      animation.stop()
    }
  }, [colorAnim])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsCarregado((prev) => !prev)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const animatedColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#21ac33', '#ff2d2d']
  })

  return (
    <View style={styles.container}>

        <Image
          source={isCarregado ? carregadoImage : descarregadoImage}
          style={styles.logo}
        />


  <Animated.Text style={[styles.title, { color: animatedColor }]}>Omnirolex</Animated.Text>

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