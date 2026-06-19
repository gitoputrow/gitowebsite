type AboutMeWidgetProps = {
  name: string;
  subtitle: string;
  intro: string;
};


export default function AboutMeWidget({name, subtitle, intro}: AboutMeWidgetProps) {
  return (
    <div className="flex w-full max-w-[680px] flex-col justify-center gap-5 text-[var(--color-secondary)] max-[820px]:mx-auto max-[820px]:items-start">
      <h1 className="text-2xl sm:text-5xl md:text-4xl font-extrabold leading-[0.92] text-[var(--color-secondary)] max-[820px]:max-w-none max-[820px]:text-start">{name}</h1>
      <p className="text-sm md:text-base font-semibold uppercase italic tracking-[0.18em] text-[rgba(255,248,212,0.62)] max-[820px]:text-start max-[425px]:tracking-[0.1em]">{subtitle}</p>
      <p className="max-w-[60ch] text-pretty text-xs italic md:text-sm font-light leading-[1.85] text-[rgba(255,248,212,0.78)] max-[1024px]:text-base max-[820px]:text-justify max-[425px]:text-sm">
        {intro}
      </p>
    </div>
  );
}
