import React, { useState, FunctionComponent } from "react";
import styled from "styled-components/native";

import { ButtonProps } from "./types";

import RegularText from "../Texts/RegularText";

import { colors } from "../colors";

const { primary, accent } = colors;

const ButtonView = styled.TouchableOpacity`
  background-color: ${accent};
  width: 300px;
  height: 60px;
  border-radius: 25px;
  padding: 15px;
  justify-content: center;
  align-items: center;
  shadow-opacity: 0.8;
  elevation: 6;
  shadow-radius: 15px;
  shadow-offset: 1px 5px;
`;

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.style}>
      <RegularText style={[{ color: primary }, props.textStyle]}>
        {props.children}
      </RegularText>
    </ButtonView>
  );
};

export default RegularButton;
