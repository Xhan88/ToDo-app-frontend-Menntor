import TodoItem from './TodoItem';

export type TodoFilter = 'all' | 'active' | 'completed';

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type TodoListProps = {
  todos: Todo[];
  filter: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onClearCompleted: () => void;
};

function FilterButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'appearance-none text-sm font-bold outline-none transition-colors',
        active
          ? 'text-[#3a7cfd]'
          : 'text-[#9495A5] hover:text-[#494C6B] dark:text-[#5b5e7e] dark:hover:text-[#e3e4f1]',
      ].join(' ')}
    >
      {children}
    </button>
  );
}

export default function TodoList({
  todos,
  filter,
  onFilterChange,
  onToggle,
  onDelete,
  onClearCompleted,
}: TodoListProps) {
  const remaining = todos.filter((t) => !t.completed).length;
  const visible =
    filter === 'all'
      ? todos
      : filter === 'active'
        ? todos.filter((t) => !t.completed)
        : todos.filter((t) => t.completed);

  return (
    <section className="mt-4">
      <div className="overflow-hidden rounded-md bg-white shadow-[0_35px_50px_-15px_rgba(0,0,0,0.15)] transition-colors dark:bg-[#25273D] dark:shadow-[0_35px_50px_-15px_rgba(0,0,0,0.5)]">
        <ul>
          {visible.map((t) => (
            <TodoItem
              key={t.id}
              id={t.id}
              text={t.text}
              completed={t.completed}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </ul>

        <div className="flex items-center justify-between px-5 py-4 text-sm text-[#9495A5] transition-colors dark:text-[#5b5e7e]">
          <span>{remaining} items left</span>

          <div className="hidden items-center gap-4 sm:flex">
            <FilterButton active={filter === 'all'} onClick={() => onFilterChange('all')}>
              All
            </FilterButton>
            <FilterButton active={filter === 'active'} onClick={() => onFilterChange('active')}>
              Active
            </FilterButton>
            <FilterButton
              active={filter === 'completed'}
              onClick={() => onFilterChange('completed')}
            >
              Completed
            </FilterButton>
          </div>

          <button
            type="button"
            onClick={onClearCompleted}
            className="appearance-none outline-none transition-colors hover:text-[#494C6B] dark:hover:text-[#e3e4f1]"
          >
            Clear Completed
          </button>
        </div>
      </div>

      <div className="mt-4 rounded-md bg-white px-5 py-4 shadow-[0_35px_50px_-15px_rgba(0,0,0,0.15)] transition-colors dark:bg-[#25273D] dark:shadow-[0_35px_50px_-15px_rgba(0,0,0,0.5)] sm:hidden">
        <div className="flex items-center justify-center gap-4">
          <FilterButton active={filter === 'all'} onClick={() => onFilterChange('all')}>
            All
          </FilterButton>
          <FilterButton active={filter === 'active'} onClick={() => onFilterChange('active')}>
            Active
          </FilterButton>
          <FilterButton active={filter === 'completed'} onClick={() => onFilterChange('completed')}>
            Completed
          </FilterButton>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-[#9495A5] dark:text-[#5b5e7e]">
        Drag and drop to reorder list
      </p>
    </section>
  );
}

