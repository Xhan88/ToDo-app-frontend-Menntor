import { useMemo, useState } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList, { type Todo, type TodoFilter } from './components/TodoList';

function createId() {
  return Math.random().toString(36).slice(2, 10);
}

const initialTodos: Todo[] = [
  { id: 't1', text: 'Complete online JavaScript course', completed: true },
  { id: 't2', text: 'Jog around the park 3x', completed: false },
  { id: 't3', text: '10 minutes meditation', completed: false },
  { id: 't4', text: 'Read for 1 hour', completed: false },
  { id: 't5', text: 'Pick up groceries', completed: false },
];

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState<TodoFilter>('all');

  const background = useMemo(
    () => ({
      backgroundImage: "url('/bg-desktop-dark.jpg')",
    }),
    [],
  );

  return (
    <div className="min-h-screen bg-[#171823]">
      <div className="h-[300px] w-full bg-cover bg-center" style={background} />

      <div className="-mt-[220px] px-6 pb-16">
        <div className="mx-auto max-w-xl">
          <TodoHeader />

          <TodoInput
            onAdd={(text) => {
              setTodos((prev) => [{ id: createId(), text, completed: false }, ...prev]);
            }}
          />

          <TodoList
            todos={todos}
            filter={filter}
            onFilterChange={setFilter}
            onToggle={(id) => {
              setTodos((prev) =>
                prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
              );
            }}
            onDelete={(id) => {
              setTodos((prev) => prev.filter((t) => t.id !== id));
            }}
            onClearCompleted={() => {
              setTodos((prev) => prev.filter((t) => !t.completed));
            }}
          />
        </div>
      </div>
    </div>
  );
}

