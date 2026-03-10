import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Linking from 'expo-linking';

export default function SignIn() {
 return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-6">
        {/* Badge */}
        <View className="mb-6 rounded-full bg-blue-100 px-4 py-2">
          <Text className="text-sm font-medium text-blue-600">
            React Native + NativeWind
          </Text>
        </View>

        {/* Title */}
        <Text className="text-center text-4xl font-extrabold text-gray-900">
          Welcome
        </Text>

        {/* Subtitle */}
        <Text className="mt-4 text-center text-base leading-6 text-gray-500">
          Start building your mobile app faster with a clean React Native starter
          template powered by NativeWind.
        </Text>

        {/* Buttons */}
        <View className="mt-10 w-full gap-4">
          <Pressable onPress={() => Linking.openURL("https://docs.expo.dev/")} className="items-center rounded-2xl bg-blue-600 py-4 active:bg-blue-700">
            <Text className="text-base font-semibold text-white">
              Expo Documentation
            </Text>
          </Pressable>

          <Pressable onPress={() => Linking.openURL("https://www.nativewind.dev/")} className="items-center rounded-2xl border border-gray-300 py-4 active:bg-gray-100">
            <Text className="text-base font-semibold text-gray-800">
              Nativewind Documentation
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
