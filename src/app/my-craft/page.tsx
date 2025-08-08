import MyCraftCardWidget from "../../../public/components/my_craft_card/my_craft_card_widget";
import "./styles.css";

export default function MyCraft() {
  return (
    <div className="main-craft">
      <div className="craft-header">
        <h1 className="title">Explore My Creations</h1>
        <div className="divider" />
      </div>
      <div className="my-craft-section">
        <MyCraftCardWidget
          page_name="app-craft"
          scr="app-craft"
          title="Innovative App Showcase"
          desc="Explore a collection of mobile and web apps designed with intuitive flows, modern interfaces, and powerful features. each project built to solve real user needs with consistent performance across platforms."
        />
        <div className="mobile-divider"></div>
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
