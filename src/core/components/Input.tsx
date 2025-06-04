import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../constants'

interface InputProps {
    value: string;
    onChange: (text: string) => void;
}

export const Input = ({value, onChange}: InputProps) => {
  return (
    <TextInput  value={value} onChangeText={text => onChange(text)} style={styles.input}/>
  )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.primary,
        borderRadius: 8,
        color: colors.complementary,
        width: 300,
        padding: 10,
        borderWidth: 1,
    },


})