import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { TextProps } from "./types";

import { colors } from "../colors";
const { black } = colors;

const StyledText = styled.Text`
  font-size: 20px;
  color: ${black};
  text-align: left;
`;

const MediumText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.style}>{props.children}</StyledText>;
};

export default MediumText;
