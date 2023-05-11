import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { TextInputProps } from 'react-native/Libraries/Components/TextInput/TextInput';

import { Container, InputContainer } from './styles'

interface InputProps {
    rightIcon?: boolean;
    leftIcon?: boolean;
    iconName: string;
    iconSize?: number;
    iconColor?: string;
}

const Input: React.FC<InputProps & TextInputProps> = ({rightIcon, leftIcon, iconName, iconSize, iconColor, ...rest}) => {
    const {COLORS} = useTheme();

  return (
    <Container>
        {leftIcon && (
            <Ionicons
            name={iconName}
            size={iconSize}
            color={iconColor || COLORS.BLACK}
            style={{padding: 5, marginRight: 10}}
            />
        )}
        <InputContainer 
          {...rest}  
        />
        

        {rightIcon && (
            <Ionicons
            name={iconName}
            size={iconSize}
            color={iconColor || COLORS.BLACK}
            style={{padding: 5}}
            />
        )}
    </Container>
  )
}

export default Input