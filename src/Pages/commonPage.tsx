import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import ListItem from "../Components/ListItem";
import TextInputContainer from "../Components/TextInputContainer";
import { StoreState } from "../../store/todo";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

interface IProps {
  isDone: boolean;
}

function CommonPage({ isDone }: IProps) {
  const selectList = (state: StoreState) => state.todoReducer.todoItems;
  const todoItems = useSelector(selectList);

  return (
    <Container>
      <ScrollView>
        <ListWrapper>
          {todoItems
            .filter((el) => el.done === isDone)
            .map((el) => (
              <ListItem
                key={el.id}
                id={el.id}
                text={el.value}
                isDone={el.done}
              />
            ))}
        </ListWrapper>
      </ScrollView>
      {!isDone && <TextInputContainer />}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  position: relative;
  background-color: white;
`;

const Header = styled.View`
  background-color: skyblue;
  height: 20px;
`;

const ListWrapper = styled.View`
  flex: 1;
  margin: 0 16px;
`;

const MainText = styled.Text`
  color: blue;
`;

export default CommonPage;
