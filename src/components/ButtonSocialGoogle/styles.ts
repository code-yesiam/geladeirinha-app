import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import {RFValue} from 'react-native-responsive-fontsize'

export const Button = styled(RectButton)`
    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;
    border-radius: ${RFValue(5)}px;
    margin-left: ${RFValue(10)}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 16px;
    background-color: ${({theme}) => theme.COLORS.GRAY6};
`;

export const IconGoogle = styled.Image`
    width: ${RFValue(30)}px;
    height: ${RFValue(30)}px;
`

export const Title = styled.Text `
    font-size: ${RFValue(15)}px;
    margin-left: ${RFValue(10)}px;
    font-family: ${({theme}) => theme.FONTS.POPPINSLIGHT};
`