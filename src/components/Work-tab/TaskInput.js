import * as React from "react";
import { TextInput } from "react-native-paper";

const TaskInput = ({ placeholder, customStyle }) => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      placeholder={placeholder}
      value={text}
      onChangeText={(text) => setText(text)}
      mode="outlined"
      activeOutlineColor="#fffbf7"
      outlineColor="#fffbf7"
      selectionColor="#c5b4aa"
      placeholderTextColor="#c5b4aa"
      theme={{
        colors: {
          primary: "#6d503c",
          text: "#6d503c",
          placeholder: "#c5b4aa",
        },
      }}
      style={{
        backgroundColor: "#fffbf7",
        ...customStyle,
      }}
    />
  );
};

export default TaskInput;
