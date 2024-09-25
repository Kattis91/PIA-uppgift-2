import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {

  const [counter, setCounter] = useState(0)

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
        onPress={() => {
          setCounter(counter + 1);
        }}
      />

      <Button
        title="MINUS"
        onPress={() => {
          setCounter(counter - 1);
        if (counter < 1 )
          setCounter(0);
        }}
      />

    </View>
  );
}
