import { Moon, Sun } from 'lucide-react';

export type Theme = 'dark' | 'light';

type TodoHeaderProps = {
  title?: string;
  theme: Theme;
  toggleTheme: () => void;
};

export default function TodoHeader({ title = 'TODO', theme, toggleTheme }: TodoHeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-3xl font-bold tracking-[0.35em] text-white">{title}</h1>
      <button
        type="button"
        onClick={toggleTheme}
        className="appearance-none rounded outline-none transition-opacity hover:opacity-80"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <Sun className="h-6 w-6 text-white" />
        ) : (
          <Moon className="h-6 w-6 text-white" />
        )}
      </button>
    </header>
  );
}

