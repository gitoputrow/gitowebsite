"use client";

import Image from "next/image";
import AboutMeWidget from "../../public/components/about_me/about_me_widget";
import MyCraftCardWidget from "../../public/components/my_craft_card/my_craft_card_widget";
import SkillWidget from "../../public/components/skill/skill_widget";
import SocialMediaCardWidget from "../../public/components/social_media_card/social_media_card_widget";

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    id: string,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToSection(id);
    }
  };

  return (
    <main>
      <section
        id="greeting"
        className="relative isolate flex min-h-screen items-center overflow-hidden sm:px-12 sm:py-8"
      >
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[0.92fr_1fr] items-center gap-8 md:gap-12 max-[920px]:grid-cols-1">
          <div className="order-2 px-6 sm:px-0">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[rgba(255,248,212,0.18)] bg-[rgba(255,248,212,0.05)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(255,248,212,0.68)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-secondary)]" />
              Portfolio / 2026
            </div>
            <AboutMeWidget
              name="Gito Putro Wardana"
              subtitle="Video Maker / Mobile Developer"
              intro="I build visual stories and mobile experiences with the same intent: clear rhythm, honest emotion, and interfaces that feel effortless to use. Every project is shaped with thoughtful detail, purposeful motion, and a focus on making ideas easier to see, feel, and understand."
            />
            <div className="mt-8" />
            <SkillWidget
              list={["Mobile Apps", "Video Production", "Creative Editing", "Website"]}
            />
            <div className="mt-12 flex gap-4 max-[820px]:justify-center ">
              <div
                role="button"
                tabIndex={0}
                onClick={() => scrollToSection("my-craft")}
                onKeyDown={(event) => handleScrollKeyDown(event, "my-craft")}
                className="cursor-pointer rounded-full bg-[var(--color-secondary)] px-7 py-3.5 text-xs sm:text-sm font-bold text-[var(--color-primary)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                View Craft
              </div>
              <div
                role="button"
                tabIndex={0}
                onClick={() => scrollToSection("contact")}
                onKeyDown={(event) => handleScrollKeyDown(event, "contact")}
                className="cursor-pointer rounded-full border border-[rgba(255,248,212,0.26)] px-7 py-3.5 text-xs sm:text-sm font-bold transition-transform duration-300 text-[var(--color-secondary)] hover:-translate-y-0.5"
              >
                Contact Me
              </div>
            </div>
          </div>

          <div className="order-1 flex justify-center">
            <div className="relative w-full  max-w-full sm:max-w-[420px]">
              <div className="absolute -left-5 top-8 h-full w-full sm:rounded-[1rem] sm:border border-[rgba(255,248,212,0.16)] hidden sm:block" />
              <div className="relative aspect-[13/9] sm:aspect-[4/5] overflow-hidden sm:rounded-[1rem] sm:border border-[rgba(255,248,212,0.16)] bg-[rgba(255,248,212,0.04)] ">
                <Image
                  fill
                  src="/picture/foto1.jpg"
                  alt="Picture of Gito Putro Wardana"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(20,20,20,0.82),transparent)] p-6">
                  <p className="text-xs sm:text-sm font-semibold text-[rgba(255,248,212,0.82)] sm:text-start text-center">
                    Visual storytelling meets product thinking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="my-craft"
        className=" px-6 py-12 min-h-screen items-center justify-center flex"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 sm:mb-12 grid  items-end gap-6 sm:gap-8 grid-cols-1">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(255,248,212,0.54)]">
                Selected work
              </p>
              <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold leading-[0.95] text-[var(--color-secondary)]">
                Explore My Creations
              </h1>
            </div>
            <p className="text-sm sm:text-lg leading-[1.8] text-[rgba(255,248,212,0.68)]">
              A compact mix of product builds and video pieces, shaped around
              clarity, motion, and practical creative execution.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 max-[760px]:grid-cols-1">
            <MyCraftCardWidget
              page_name="app-craft"
              scr="app-craft"
              title="Innovative App Showcase"
              desc="Explore a collection of mobile and web apps designed with intuitive flows, modern interfaces, and powerful features. each project built to solve real user needs with consistent performance across platforms."
            />
            <MyCraftCardWidget
              page_name="video-craft"
              scr="video-craft"
              title="Creative Video Portfolio"
              desc="Discover a range of video works crafted with strong storytelling, refined visuals, and precise editing to connect emotionally and deliver powerful brand messages that leave a lasting impression."
            />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className=" py-12 px-8  min-h-screen items-center justify-center flex"
      >
        <div className=" mx-auto grid max-w-7xl grid-cols-[1.05fr_0.95fr] gap-6 rounded-[2rem] border border-[rgba(255,248,212,0.14)] bg-[rgba(255,248,212,0.035)] p-8 max-[820px]:grid-cols-1 max-[425px]:p-6">
          <div className="flex  flex-col justify-between rounded-[1.5rem] bg-[rgba(20,20,20,0.36)] p-8 max-[425px]:min-h-0 max-[425px]:p-6">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(255,248,212,0.54)]">
                Let&apos;s connect
              </p>
              <h1 className="max-w-xl text-2xl sm:text-7xl font-extrabold leading-[0.95] text-[var(--color-secondary)]">
                Don&apos;t Forget To Get in Touch
              </h1>
            </div>
            <p className="mt-4 sm:mt-10 max-w-xl text-sm sm:text-lg leading-[1.8] text-[rgba(255,248,212,0.68)] italic">
              Got an app idea, video brief, or collaboration in mind? Send the
              signal and I&apos;ll meet you there.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-5">
            <SocialMediaCardWidget
              scr="linkedin"
              name="Linkedin"
              username="gitoputrowardana"
              url="https://linkedin.com/in/gitoputrowardana/"
            />
            <SocialMediaCardWidget
              scr="whatsapp"
              name="Whatsapp"
              username="+62 8112518692"
              url="https://wa.me/628112518692"
            />
            <SocialMediaCardWidget
              scr="mail"
              name="Gmail"
              username="gitoputrowardana@gmail.com"
              url="mailto:gitoputrowardana@gmail.com"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
