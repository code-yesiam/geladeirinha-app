import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({theme}) => theme.COLORS.GRAY5};
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-top: 10px;
    padding: 0 16px;
    flex-direction: row;
`

export const InputContainer = styled.TextInput`
    width: 100%;
    height: 45px;
    border: 0;
    font-size: 14px;
    border-radius: 8px;
    font-family: ${({theme}) => theme.FONTS.POPPINSLIGHT};
`