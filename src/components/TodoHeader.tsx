type TodoHeaderProps = {
  title?: string;
};

export default function TodoHeader({ title = 'TODO' }: TodoHeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-3xl font-bold tracking-[0.35em] text-white">{title}</h1>
      <div className="h-6 w-6" aria-hidden="true" />
    </header>
  );
}

