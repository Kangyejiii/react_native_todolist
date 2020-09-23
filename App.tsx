import * as React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/todo";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./src/Components/Header";
import TabMenu from "./src/Components/TabMenu";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar />
        <SafeAreaView style={styles.container}>
          <Header />
          <TabMenu />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
