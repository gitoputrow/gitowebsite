import Image from "next/image";
import SkillWidget from "../../../public/components/skill/skill_widget";
import AboutMeWidget from "../../../public/components/about_me/about_me_widget";

export default function GreetingPage() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-primary)] px-0 pb-12 pt-[4.8rem]">
        <div className="flex w-3/5 flex-col justify-center max-[768px]:w-[70%]">
          <div className="flex max-[680px]:flex-col">
            <div className="relative aspect-square w-[40%] overflow-hidden rounded-full max-[1024px]:w-[37%] max-[768px]:w-[45%] max-[680px]:w-[60%] max-[680px]:self-center max-[425px]:w-[80%]">
              <Image
                fill
                src="/picture/foto1.jpg"
                alt="Picture of the author"
                style={{ objectFit: "cover", borderRadius: "50%" }}
              />
            </div>
            <div className="mx-4 max-[680px]:mx-0 max-[680px]:my-4" />
            <AboutMeWidget
              name="Gito Putro Wardana"
              subtitle="Quick Intro About Me"
              intro="I'm a video maker who's deeply interested in the art of visual
        storytelling, and I channel that same creative energy into building
        engaging mobile applications with Flutter, bridging the worlds of visual
        media and interactive technology..."
            />
          </div>
          <div className="my-2" />
          <SkillWidget
            list={["Mobile Developer", "Videographer", "Video Editor"]}
          />
        </div>
      </div>
    </>
  );
}
