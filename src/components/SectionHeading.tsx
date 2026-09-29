export default function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-2xl px-5 text-center">
      <p className="text-base md:text-lg">{eyebrow}</p>
      <h2 className="mt-1 text-2xl font-semibold md:text-4xl">{title}</h2>
      {children && <p className="mt-6 text-sm leading-relaxed md:text-base">{children}</p>}
    </div>
  );
}
