import { render, screen, userEvent } from '@testing-library/react-native';
import Task from '../components/Task';

//Tests for tasks
describe('Task', () => {
  test('renders a task', () => {
    const task = {
      id: 1,
      title: 'Test Task',
      category: 'Test Category',
      isChecked: false,
    };

    render(<Task task={task} />);

    // Just check if the title is displayed
    const titleElement = screen.getByText('Test Task');
    const categoryElement = screen.getByText('Test Category');
    expect(titleElement).toBeTruthy();
    expect(categoryElement).toBeTruthy();
  });

  test('toggles completion status when pressed', async () => {
    const task = {
      id: 1,
      title: 'Test Task',
      category: 'Test Category',
      isChecked: false,
    };

    render(<Task task={task} />);

    const checkbox = screen.getByTestId('checkbox'); // Find the checkbox element

    const user = userEvent.setup();
    await user.press(checkbox);

    expect(checkbox).toBeChecked();
  });

  test('toggles from checked to unchecked when pressed', async () => {
    const task = {
      id: 1,
      title: 'Test Task',
      category: 'Test Category',
      isChecked: true,
    };

    render(<Task task={task} />);

    const checkbox = screen.getByTestId('checkbox'); // Find the checkbox element

    const user = userEvent.setup();
    await user.press(checkbox);

    expect(checkbox).not.toBeChecked();
  });

  test('displays TaskDialouge component when pressed', async () => {
    const task = {
      id: 1,
      title: 'Test Task',
      category: 'Test Category',
      isChecked: true,
    };

    render(
      <>
        <Task task={task} />
      </>
    );

    expect(screen.queryByTestId('dialogue-title')).toBeNull();

    const DialougeTrigger = await screen.findByTestId('task-trigger');

    const user = userEvent.setup();
    await user.press(DialougeTrigger);

    const TaskDialouge = screen.findByTestId('dialogue-title'); // Find the checkbox element
    expect(TaskDialouge).toBeTruthy();
  });
});
