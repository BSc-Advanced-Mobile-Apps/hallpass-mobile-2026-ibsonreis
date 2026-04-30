import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import Task from '@/components/Task';

export interface ITask {
  id: number;
  title: string;
  category: string;
  isChecked: boolean;
}

export default function HomeScreen() {
  const initialTasks: ITask[] = [
    {
      id: 1,
      title: 'Task 1',
      category: 'Category 1',
      isChecked: false,
    },
    {
      id: 2,
      title: 'Task 2',
      category: 'Category 2',
      isChecked: true,
    },
    {
      id: 3,
      title: 'Task 3',
      category: 'Category 3',
      isChecked: false,
    },
  ];

  return (
    <View className="bg-background flex flex-1 py-32">
      <Text className="text-foreground text-center">HallPass!</Text>
      {initialTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </View>
  );
}
