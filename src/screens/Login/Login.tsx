import React from 'react'
import { SafeAreaView } from 'react-native'
import { 
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton, 
} from './styles'
import theme from '../../styles/theme'
import { useTheme } from 'styled-components/native'

import Input from '../../components/Input'

import { ButtonSocialGoogle } from '../../components/ButtonSocialGoogle/ButtonSocialGoogle'

import { ButtonSocial } from '../../components/ButtonSocial/ButtonSocial'

const Login: React.FC = () => {
    const {COLORS} = useTheme();
  return (
    <SafeAreaView>
        <Container>
            <ContentHeader>
                <Title>Welcome{"\n"} to Geladeirinha</Title>
                <Description>Sign up with:</Description>
                <ViewButton>
                    <ButtonSocial iconName="google" color={theme.COLORS.BLACK}/>
                    <ButtonSocial iconName="facebook" color={theme.COLORS.BLUE}/>

                </ViewButton>
            </ContentHeader>
            <ContentBody>
                <Input 
                leftIcon 
                iconSize={25} 
                iconName='mail-outline' 
                iconColor={COLORS.PURPLE}
                placeholder='Digite seu e-mail:'
                />
                <Input 
                leftIcon 
                iconSize={25} 
                iconName='lock-closed' 
                iconColor={COLORS.PURPLE}
                placeholder='Digite sua senha:'
                />
            </ContentBody>
            <ContentFooter></ContentFooter>
        </Container>
    </SafeAreaView>
  )
}

export {Login}