import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

export default function HomeScreen() {
  const [checked, setChecked] = useState(false);

  return (
    <View className="bg-background flex flex-1 py-32">
      <Text className="text-foreground text-center">Hello, world!</Text>

      <View className="mx-3 flex w-full flex-row gap-5 py-4">
        <View className="flex items-center justify-center">
          <Checkbox className="border-2" onCheckedChange={setChecked} checked={checked}></Checkbox>
        </View>
        <View className="border-foreground-transparent mr-10 flex h-full flex-1 gap-1 border-b py-4">
          <Text className="text-foreground text-xl">My test item</Text>
          <Text className="text-foreground-transparent text-xl">Test category</Text>
        </View>
      </View>
    </View>
  );
}
