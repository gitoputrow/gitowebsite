import Image from "next/image";
import "./styles.css";
import SkillWidget from "../../../public/components/skill/skill_widget";
import AboutMeWidget from "../../../public/components/about_me/about_me_widget";

export default function GreetingPage() {
  return (
    <>
      <div className="mainpage">
        <div className="profile">
          <div className="intro">
            <div className="photosection">
              <Image
                fill
                src="/picture/foto1.jpg"
                alt="Picture of the author"
                style={{ objectFit: "cover", borderRadius: "50%" }}
              />
            </div>
            <div className="spacerphotoandtext"></div>
            <AboutMeWidget
              name="Gito Putro Wardana"
              subtitle="Fast Intro About Me"
              intro="I'm a video maker who's deeply interested in the art of visual
        storytelling, and I channel that same creative energy into building
        engaging mobile applications with Flutter, bridging the worlds of visual
        media and interactive technology..."
            />
          </div>
          <div style={{ marginBottom: "8px", marginTop: "8px" }}></div>
          <SkillWidget
            list={["Mobile Developer", "Videographer", "Video Editor"]}
          />
        </div>
      </div>
    </>
  );
}
