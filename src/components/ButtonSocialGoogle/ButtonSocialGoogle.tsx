import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { IconGoogle, Title, Button } from './styles'

interface Props extends RectButtonProps {
    title?: string
}

import PngGoogle from '../../assets/google.png'
const ButtonSocialGoogle: React.FC<Props> = ({title, ...rest}) => {
  return (
    <Button {...rest}>
        <IconGoogle
            source={PngGoogle}
            resizeMode="contain"
        />
        <Title>{title}</Title>
    </Button>
  )
}

export {ButtonSocialGoogle}