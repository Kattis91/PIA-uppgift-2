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
      }}
    >
      <Text style={{ fontSize: 75 }}>{counter}</Text>

      <Button
        title="PLUS"
        onPress={addition}
      />

      <Button
        title="MINUS"
        onPress={subtraktion}
      />

      {(counter > 0) &&
        <Button
          title="RESET"
          onPress={() => {
            setCounter(0);
          }}
        />
      }

    </View>
  );
}
