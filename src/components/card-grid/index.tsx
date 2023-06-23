type CardGridProps = {
  children: React.ReactNode;
};

export default function CardGrid({ children }: CardGridProps) {
  return (
    <section className="grid grid-cols-4 grid-flow-col max-w-lg gap-4">
      {children}
    </section>
  );
}
