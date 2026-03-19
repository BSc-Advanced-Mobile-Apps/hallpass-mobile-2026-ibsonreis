import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import Task from '@/components/task';

export interface ITask {
  title: String;
  category: String;
  isChecked: Boolean;
}

export default function HomeScreen() {
  const task: ITask = {
    title: 'My test item',
    category: 'Test category',
    isChecked: false,
  };

  return (
    <View className="bg-background flex flex-1 py-32">
      <Text className="text-foreground text-center">Hello, world!</Text>
      <Task task={task} />
    </View>
  );
}
