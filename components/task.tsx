import { ITask } from '@/app/index';
import { Checkbox } from './ui/checkbox';
import { View } from 'react-native';
import { useState } from 'react';
import { Text } from '@/components/ui/text';

interface TaskProps {
  task: ITask;
}

export default function Task({ task }: TaskProps) {
  const [checked, setChecked] = useState(false);

  return (
    <View className="mx-3 flex w-full flex-row gap-5 py-4">
      <View className="flex items-center justify-center">
        <Checkbox className="border-2" onCheckedChange={setChecked} checked={checked}></Checkbox>
      </View>
      <View className="border-foreground-transparent mr-10 flex h-full flex-1 gap-1 border-b py-4">
        <Text className="text-foreground text-xl">{task.title}</Text>
        <Text className="text-foreground-transparent text-xl">{task.category}</Text>
      </View>
    </View>
  );
}
