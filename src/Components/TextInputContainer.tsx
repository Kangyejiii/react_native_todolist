import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/todo/todos";
import styled from "styled-components/native";
import PlusBtn from "../../assets/addBtn";

export default function TextInputContainer() {
  const [value, onChangeText] = useState("");
  const dispatch = useDispatch();
  const onPress = () => {
    if (value.trim().length) {
      dispatch(addItem(value));
      onChangeText("");
    }
  };

  return (
    <Container>
      <Btn onPress={onPress}>
        <PlusBtn />
      </Btn>
      <Input
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder="오늘의 할 일을 작성하세요!"
      />
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 10px;
  border: 1px solid #ecf0f1;
  background: white;
`;

const Btn = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 20px;
`;

const Input = styled.TextInput`
  flex: 5;
`;
