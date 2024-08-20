import React, { FC } from "react";
import { GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  title: string;
  handlePress: ((event: GestureResponderEvent) => void) & (() => void);
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}

const CustomButton: FC<Props> = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <View className={`${containerStyles}`}>
      <TouchableOpacity
        onPress={handlePress}
        className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center self-stretch ${isLoading} ? 'opacity-50' : ''`}
        activeOpacity={0.7}
        disabled={isLoading}
      >
        <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
