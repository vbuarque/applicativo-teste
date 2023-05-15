import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    backgroundColor?: string;
    textColor?: string;
    marginTop?: number;
    marginBottom?: number;
}

export default function DefaultButton({ title, backgroundColor, textColor, marginTop, marginBottom, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            style={
                [
                    styles.button,
                    { backgroundColor: backgroundColor ? backgroundColor : '#00688C' },
                    { marginTop: marginTop ? marginTop : 0 },
                    { marginBottom: marginBottom ? marginBottom : 0 }
                ]
            }
            {...rest}>
            <Text style={[styles.titleText, { color: textColor ? textColor : '#f8f8f8' }]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}