import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import styled from "styled-components/native";

function Header() {
  return (
    <Container>
      <Text>✏️</Text>
    </Container>
  );
}

const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #3498db;
`;

export default Header;
