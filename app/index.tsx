import { View } from "react-native";
import { Text } from "@/components/ui/text"
import { Checkbox } from "@/components/ui/checkbox"

export default function HomeScreen() {
  return (
    <View className="flex flex-1 py-32 bg-background">
      <Text className="text-foreground text-center">Hello, world!</Text>

      <View className="flex flex-row mx-5 gap-5 py-4">
        <View className="flex justify-center items-center ">
          <Checkbox className="border-2"></Checkbox>
        </View>
        <View className="border-b border-foreground-transparent pb-3">
          <Text className="text-foreground">Submit Assignment</Text>
          <Text className="text-foreground-transparent">Due: Oct 20</Text>
        </View>
      </View>
    </View>
  );
}