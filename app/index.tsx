import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {

  const [counter, setCounter] = useState(0)

  function addition() {
    setCounter(counter + 1)
  }

  function subtraction() {
    setCounter(counter - 1);
    if (counter < 1)
      setCounter(0);
  }

  return (
    <View style={styles.container}>

      <Text style={{ fontSize: 75 }}>{counter}</Text>

      <View style={{ flexDirection: "row" }}>

        <View style={styles.plusButton}>
          <Button
            title="PLUS"
            color="white"
            onPress={addition}
          />
        </View>

        <View style={styles.minusButton}>
          <Button
            title="MINUS"
            color="white"
            onPress={subtraction}
          />
        </View>
      </View>

      <View style={{ flex: 1 }}></View>

      {(counter > 0) &&
        <View style={styles.resetButton}>
          <Button
            title="RESET"
            color="white"
            onPress={() => {
              setCounter(0);
            }}
          />
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFC2"
  },
  plusButton: {
    backgroundColor: "green", 
    borderRadius: 10, 
    marginRight: 10, 
    marginTop: 20, 
    padding: 5
  },
  minusButton: {
    backgroundColor: "blue", 
    borderRadius: 10, 
    marginLeft: 10, 
    marginTop: 20, 
    padding: 5
  },
  resetButton: {
    backgroundColor: "#BF0A30", 
    borderRadius: 10, 
    marginTop: 20, 
    padding: 5, 
    marginBottom: 30
  },
});