import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

const profile: FC<Props> = (props) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Profile</Text>
    </View>
  );
};

export default profile;
