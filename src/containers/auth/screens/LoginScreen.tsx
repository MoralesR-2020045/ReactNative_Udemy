import { Alert, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Button, Input, makeHttpRequest, Spinner, URL_API_REST } from '@core'
import React, { useState } from 'react'

export const LoginScreen = ({ navigation }: any) => {

    const { top } = useSafeAreaInsets();

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onSubmit() {
        if (!email || !password) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return
        }

        setLoading(true)
        try {
            const response = makeHttpRequest({
                host: URL_API_REST,
                method: 'POST',
                path: '/login',
                body: {
                    email,
                    password,
                }
            })


            navigation.navigate('MainApp', {
                screen: 'Home',
                params: { token: response },
            })
        } catch (error: any) {
            Alert.alert('Error', error.message)
        }
        setLoading(true)
    }

    return (
        <View style={[styles.container, { paddingTop: top }]}>
            <Text style={styles.title}>Login</Text>
            <View>
                <Text>Email</Text>
                <Input value={email} onChange={setEmail} />
            </View>
            <View>
                <Text>Password</Text>
                <Input value={password} onChange={setPassword} />
            </View>
            {loading ? (<Spinner />
            ) : (
                <Button title='Iniciar sesión' onPress={onSubmit} />
            )}
            <Button title='Crear Cuenta' onPress={() => null} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: "10%",
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
    },
    title: {
        fontSize: 30,
        color: '#333',
        fontFamily: 'PlaypenSans-Bold',
        textAlign: "center",
        marginBottom: 90,
    },
    inputContainer: {
        width: '100%',
        backgroundColor: 'orange',
        paddingHorizontal: 20,
    },
});