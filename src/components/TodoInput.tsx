import { useId, useState } from 'react';

type TodoInputProps = {
  onAdd: (text: string) => void;
};

export default function TodoInput({ onAdd }: TodoInputProps) {
  const id = useId();
  const [value, setValue] = useState('');

  function submit() {
    const text = value.trim();
    if (!text) return;
    onAdd(text);
    setValue('');
  }

  return (
    <div className="mt-10 rounded-md bg-[#25273D] px-5 py-4 shadow-[0_35px_50px_-15px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-4">
        <span
          className="h-6 w-6 appearance-none rounded-full border border-[#393a4c]"
          aria-hidden="true"
        />
        <label className="sr-only" htmlFor={id}>
          Create a new todo
        </label>
        <input
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') submit();
          }}
          placeholder="Create a new todo…"
          className="w-full appearance-none bg-transparent text-[0.95rem] text-[#c8cbe7] placeholder:text-[#767992] outline-none"
        />
      </div>
    </div>
  );
}

