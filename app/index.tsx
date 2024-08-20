import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, Redirect } from "expo-router";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { images } from "../constants/index";
import CustomButton from "@/components/CustomButton";
interface Props {}

const index: FC<Props> = (props) => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full justify-center items-center min-h-[85vh] px-4">
            <Image
              source={images.logo}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
            />
            <Image
              source={images.cards}
              className="max-w--[380px] w-full h-[300px]"
            />
            <View className="relative mt-5">
              <Text className="text-3xl text-white font-bold text-center">
                Discover Endless Possibilities with{" "}
                <Text className="text-secondary-200">Aura</Text>
              </Text>
              <Image
                source={images.path}
                className="w-[134px] h-[15px] absolute -bottom-2 -right-8"
                resizeMode="contain"
              />
            </View>
            <Text className="text-sm text-gray-100 mt-7 text-center font-pregular">
              Where creativity meets innovation: embark on a journey of
              limitless exploration with Aura
            </Text>
            <CustomButton
              title={"Continue with Email"}
              handlePress={() => router.push("/sign-in")}
              containerStyles="w-full mt-7"
            />
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  textStyle: {
    alignSelf: "center",
  },
});

export default index;
