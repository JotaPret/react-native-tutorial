import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'

export default function FormSignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [avatar, setAvatar] = useState("")

  const handleSubmit = async () => {
    console.log({name, email, pass, avatar})
    const response = await fetch("http://localhost:3333/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email, pass, avatar})
    })
    if(response.ok){
      console.log("Usuário cadastrado com sucesso!")
      const data = await result.json()
      console.log("data")
    }else {
        console.log("Erro ao cadastrar usuário")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.form}>
        <TextInput 
            style={styles.inputs} 
            placeholder="Nome"
            placeholderTextColor="#6d8b68"
            value={name}
            onChangeText={setName}
        />
        <TextInput 
            style={styles.inputs} 
            placeholder="Email"
            placeholderTextColor="#6d8b68"
            value={email}
            onChangeText={setEmail}
        />
        <TextInput 
            style={styles.inputs} 
            placeholder="Senha" 
            placeholderTextColor="#6d8b68"
            secureTextEntry
            value={pass}
            onChangeText={setPass}
        />
        <TextInput 
            style={styles.inputs} 
            placeholder="Avatar" 
            placeholderTextColor="#6d8b68"
            value={avatar}
            onChangeText={setAvatar}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050a05',
    alignItems: 'center'
  },
  form:{
    width: "90%",
    gap: 12,
    marginTop: 10,
    backgroundColor: '#0b140b',
    borderWidth: 1,
    borderColor: '#6dff1a',
    borderRadius: 12,
    padding: 14
  },
  inputs:{
    borderWidth: 1,
    borderColor: "#2d4d2b",
    borderStyle: "solid",
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#101a10',
    color: '#ecffe4'
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20,
    marginTop: 24,
    color: '#7fff00',
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  button: {
    backgroundColor: '#7fff00',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '800',
    letterSpacing: 0.4
  }
})