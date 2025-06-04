import { Alert, StyleSheet, Text, TouchableOpacity, } from 'react-native'
import React from 'react'
import { colors } from '../constants'

interface ButtonProps {
    title: string;
    onPress: () => void;

}

export const Button = ({ title, onPress }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={styles.btn}>
            <Text style={styles.txt}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 5,
        marginTop: 20
    },

    txt: {
        color: colors.complementary,
        fontSize: 16,
    }
})