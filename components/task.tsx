import { ITask } from '@/app/index';
import { Checkbox } from './ui/checkbox';
import { TouchableOpacity, View, Pressable, Animated } from 'react-native';
import { useState } from 'react';
import { Text } from '@/components/ui/text';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import React from 'react';
import TaskDialogue from '@/components/TaskDialogue';
//import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { CircleX } from 'lucide-react-native';

interface TaskProps {
  task: ITask;
  onUpdate?: (task: ITask) => void;
  onDelete?: (id: number) => void;
}

export default function Task({ task: initialTask, onUpdate, onDelete }: TaskProps) {
  const [task, setTask] = React.useState(initialTask);
  const [showDialog, setShowDialog] = React.useState(false);

  const handleSetChecked = () => {
    const updatedTask = { ...task, isChecked: !task.isChecked };
    setTask(updatedTask);
    onUpdate?.(updatedTask);
  };

  const renderRightActions = (progress: any, dragX: any) => {
    const width = dragX.interpolate({
      inputRange: [-120, 0],
      outputRange: [120, 60],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View style={{ width }}>
        <Pressable
          className="h-full items-end justify-center rounded-lg bg-red-500 px-5"
          onPress={() => onDelete?.(task.id)}>
          <CircleX size={50} color="White" />
        </Pressable>
      </Animated.View>
    );
  };

  return (
    //<Swipeable renderRightActions={renderRightActions}>
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger testID="task-trigger" asChild>
        <TouchableOpacity className="flex w-full flex-row">
          <View className="flex h-full w-24 px-8 py-5">
            <Checkbox
              testID="checkbox"
              className="border-foreground checked:bg-foreground"
              checked={task.isChecked}
              onCheckedChange={handleSetChecked}
            />
          </View>

          <View className="border-foreground-transparent flex h-full flex-1 gap-1 border-b py-4">
            <Text className="text-foreground text-xl">{task.title}</Text>
            <Text className="text-foreground-transparent text-xl">{task.category}</Text>
          </View>
        </TouchableOpacity>
      </DialogTrigger>

      <TaskDialogue
        task={task}
        setTask={setTask}
        setShowDialog={setShowDialog}
        showDialog={showDialog}
      />
    </Dialog>
    //</Swipeable>
  );
}
