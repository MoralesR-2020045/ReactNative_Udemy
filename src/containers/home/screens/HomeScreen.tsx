import { FlatList, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { makeHttpRequest, URL_API_REST } from '@core'

const dummy_users = [
  { id: 1, name: "Ramiro Morales", email: 'ramiro12@gmail.com' },
  { id: 2, name: "Devyn Gomez", email: 'devyn12@gmail.com' },
  { id: 3, name: "Samuel Perez", email: 'samuel12@gmail.com' },
]

interface User {
  id: number
  name: string
  email: string
}

export const HomeScreen = ({route}: any ) => {
  const token = route.params?.token
  
  const [users, setUsers] = useState<User[]>([])
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    makeHttpRequest({
      host: URL_API_REST,
      method: 'GET',
      path: '/user',
      token,
    })
    .then((response) => setUsers(response))
    .catch(error => Alert.alert("Ocurrio un error", error.message))
  }, [])

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Text style={styles.title}>Hola Ramiro Morales</Text>
      <Text>Lista de Usuarios</Text>

      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', gap: 16 }}>
            <Text style={{}}>{item.name}</Text>
            <Text style={{}}>{item.email}</Text>
            <TouchableOpacity>
              <Text>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{ gap: 30 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 24,
  },
  title: {
    fontSize: 30,
    color: '#333',
    fontFamily: 'PlaypenSans-Bold',
    textAlign: "center",
  },
})