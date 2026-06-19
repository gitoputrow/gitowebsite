import MyCraftCardWidget from "../../../public/components/my_craft_card/my_craft_card_widget";

export default function MyCraft() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-8 py-16 max-h-[660px]:justify-start max-[680px]:justify-start">
      <div className="mb-10 flex flex-col items-center max-[680px]:mb-8 max-[320px]:mb-6">
        <h1 className="mb-3 text-center text-[clamp(1.2rem,3vw,2rem)] font-bold text-[var(--color-secondary)]">
          Explore My Creations
        </h1>
        <div className="h-[3px] w-20 rounded-full bg-[var(--color-secondary)]" />
      </div>
      <div className="flex items-center justify-around max-[680px]:flex-col">
        <MyCraftCardWidget
          page_name="app-craft"
          scr="app-craft"
          title="Innovative App Showcase"
          desc="Explore a collection of mobile and web apps designed with intuitive flows, modern interfaces, and powerful features. each project built to solve real user needs with consistent performance across platforms."
        />
        <div className="my-4" />
        <MyCraftCardWidget
          page_name="video-craft"
          scr="video-craft"
          title="Creative Video Portfolio"
          desc="Discover a range of video works crafted with strong storytelling, refined visuals, and precise editing to connect emotionally and deliver powerful brand messages that leave a lasting impression."
        />
      </div>
    </div>
  );
}
