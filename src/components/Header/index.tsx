import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import { ArrowLeft } from 'phosphor-react-native';

interface HeaderProps {
    title: string;
}

export default function DefaultHeader({ title }: HeaderProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {}}>
                <ArrowLeft size={32} color="#000"/>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}