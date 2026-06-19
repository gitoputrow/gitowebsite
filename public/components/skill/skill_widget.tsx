type SkillWidgetProps = {
  list: string[];
};

export default function SkillWidget({ list }: SkillWidgetProps) {
  return (
    <>
      <div className="flex flex-wrap gap-4 max-[820px]:justify-center">
        {list.map((item, index) => (
          <div key={index} className="rounded-full border border-[rgba(255,248,212,0.24)] bg-[rgba(255,248,212,0.08)] px-6 py-3 shadow-[0_14px_34px_rgba(0,0,0,0.18)] max-[425px]:px-5 max-[425px]:py-2.5">
            <div className="whitespace-nowrap text-sm md:text-base font-semibold leading-none text-[var(--color-secondary)] max-[425px]:text-sm">{item}</div>
          </div>
        ))}
      </div>
    </>
  );
}
