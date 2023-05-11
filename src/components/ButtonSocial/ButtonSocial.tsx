import React from 'react'
import { Fontisto } from "@expo/vector-icons";
import { RectButtonProps } from 'react-native-gesture-handler'
import { IconFacebook, Title, Button } from './styles'
import theme from '../../styles/theme';

interface Props extends RectButtonProps {
    title?: string
    iconName:React.ComponentProps<typeof Fontisto> ['name']
    color: string
}

import PngGoogle from '../../assets/google.png'
const ButtonSocial: React.FC<Props> = ({title, iconName, color, ...rest}) => {
  return (
    <Button {...rest} style={{backgroundColor: color}}>
        <IconFacebook name={iconName}/>
        <Title>{title}</Title>
    </Button>
  )
}

export {ButtonSocial}