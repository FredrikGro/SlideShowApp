import React, { useState, FunctionComponent } from "react";
import styled from "styled-components/native";

import { ButtonProps } from "./types";

import RegularText from "../Texts/RegularText";

import { colors } from "../colors";

const { primary, black} = colors;

const ButtonView = styled.TouchableOpacity`
  background-color: ${black};
  width: 100px;
  height: 40px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.style}>
      <RegularText style={[{color: primary}, props.textStyle]}>{props.children}</RegularText>
    </ButtonView>
  );
};

export default RegularButton;
