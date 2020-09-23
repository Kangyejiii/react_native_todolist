import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Trashicon from "../../assets/trashicon";
import { useDispatch } from "react-redux";
import { removeItem, doneItem } from "../../store/todo/todos";
import CheckBoxIcon from "../../assets/checkboxicon";

interface ListItemProps {
  text: string;
  id: number;
  isDone: boolean;
}

function ListItem({ text, id, isDone }: ListItemProps) {
  const dispatch = useDispatch();

  const onRemove = () => {
    dispatch(removeItem(id));
  };

  const onToggle = () => {
    dispatch(doneItem(id));
  };

  return (
    <Container>
      <CheckBox onPress={onToggle}>{isDone && <CheckBoxIcon />}</CheckBox>
      <TextBox line={isDone}>{text}</TextBox>
      <Btn onPress={onRemove}>
        <Trashicon />
      </Btn>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 6px 11px 6px 9px;
`;

const CheckBox = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin: 0 10px;
  border: 0.5px #bdbdbd;
  border-radius: 50px;
`;

const TextBox = styled.Text<{ line: boolean }>`
  flex: 3;
  text-decoration-line: ${({ line }) => (line ? "line-through" : "none")};
`;

const Btn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 20px;
`;

export default ListItem;
