import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {

  const [counter, setCounter] = useState(0)

  function addition() {
    setCounter(counter + 1)
  }

  function subtraktion() {
    setCounter(counter - 1);
    if (counter < 1)
      setCounter(0);
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFFFC2"
      }}
    >
      <Text style={{ fontSize: 75 }}>{counter}</Text>

      <View style={{ flexDirection: "row" }}>

        <View style={{ backgroundColor: "green", borderRadius: 10, marginRight: 10, marginTop: 20, padding: 5 }}>
          <Button
            title="PLUS"
            color="white"
            onPress={addition}
          />
        </View>

        <View style={{ backgroundColor: "blue", borderRadius: 10, marginLeft: 10, marginTop: 20, padding: 5 }}>
          <Button
            title="MINUS"
            color="white"
            onPress={subtraktion}
          />
        </View>
      </View>

      {(counter > 0) &&
        <View style={{ backgroundColor: "red", borderRadius: 10, marginTop: 20, padding: 5 }}>
          <Button
            title="RESET"
            color= "white"
            onPress={() => {
              setCounter(0);
            }}
          />
        </View>
      }

    </View>
  );
}
