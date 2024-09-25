import { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {

  const [counter, setCounter] = useState(0)

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 75}}> {counter}</Text>
    </View>
  );
}
