type TodoItemProps = {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoItem({
  id,
  text,
  completed,
  onToggle,
  onDelete,
}: TodoItemProps) {
  return (
    <li className="group flex items-center justify-between gap-4 border-b border-[#393a4c] px-5 py-4">
      <button
        type="button"
        onClick={() => onToggle(id)}
        className="flex appearance-none items-center gap-4 text-left outline-none"
        aria-pressed={completed}
      >
        <span
          className={[
            'grid h-6 w-6 appearance-none place-items-center rounded-full border transition-colors',
            completed
              ? 'border-transparent bg-gradient-to-br from-[#55DDFF] to-[#C058F3]'
              : 'border-[#393a4c] hover:border-[#55DDFF]',
          ].join(' ')}
          aria-hidden="true"
        >
          {completed ? (
            <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
              <path
                d="M1 4.304L3.696 7 10 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : null}
        </span>
        <span
          className={[
            'text-[0.95rem] transition-colors',
            completed ? 'text-[#4d5067] line-through' : 'text-[#c8cbe7]',
          ].join(' ')}
        >
          {text}
        </span>
      </button>

      <button
        type="button"
        onClick={() => onDelete(id)}
        className="appearance-none opacity-0 outline-none transition-opacity group-hover:opacity-100"
        aria-label="Delete todo"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0.97a.75.75 0 0 1 0 1.06L10.06 9l6.91 6.97a.75.75 0 1 1-1.06 1.06L9 10.06l-6.97 6.97a.75.75 0 1 1-1.06-1.06L7.94 9 .97 2.03A.75.75 0 1 1 2.03.97L9 7.94 15.91.97a.75.75 0 0 1 1.06 0Z"
          />
        </svg>
      </button>
    </li>
  );
}

