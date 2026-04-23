import { View } from 'react-native';
import { Text } from '@/components/ui/text';
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
      <Text className="text-foreground text-center">HallPass!</Text>
      <Task task={task} />
    </View>
  );
}
