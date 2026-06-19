import SocialMediaCardWidget from "../../../public/components/social_media_card/social_media_card_widget";

export default function ContactMe() {
  return (
    <div className="flex min-h-screen min-w-full flex-col content-center justify-center px-12 py-20 max-h-[572px]:content-start max-h-[572px]:justify-start max-[680px]:content-start max-[680px]:justify-start">
      <div className="flex justify-between max-[680px]:flex-col">
        <div className="hidden max-[680px]:block">
          <h1 className="text-left text-4xl font-extrabold text-[var(--color-secondary)] max-[375px]:text-[32px] max-[320px]:text-[28px]">Don&apos;t Forget To Get in Touch</h1>
          <div className="mb-5" />
          <p className="text-left text-xl font-semibold text-[var(--color-secondary)] max-[375px]:text-lg max-[320px]:text-base">HIT ME UP 🤙🏻!!!</p>
          <div className="mb-6" />
        </div>
        <div className="flex flex-col">
          <SocialMediaCardWidget
            scr="linkedin"
            name="Linkedin"
            username="gitoputrowardana"
            url="https://linkedin.com/in/gitoputrowardana/"
          />
          <div className="mb-6" />
          <SocialMediaCardWidget
            scr="whatsapp"
            name="Whatsapp"
            username="+62 8112518692"
            url="https://wa.me/628112518692"
          />
          <div className="mb-6" />
          <SocialMediaCardWidget
            scr="mail"
            name="Gmail"
            username="gitoputrowardana@gmail.com"
            url="mailto:gitoputrowardana@gmail.com"
          />
        </div>
        <div className="flex flex-col justify-between max-[680px]:hidden">
          <div>
            <h1 className="text-right text-[52px] font-extrabold text-[var(--color-secondary)] max-[1024px]:text-5xl max-[768px]:text-[42px]"> Don&apos;t</h1>
            <div className="mb-2" />
            <h1 className="text-right text-[52px] font-extrabold text-[var(--color-secondary)] max-[1024px]:text-5xl max-[768px]:text-[42px]"> Forget To</h1>
            <div className="mb-2" />
            <h1 className="text-right text-[52px] font-extrabold text-[var(--color-secondary)] max-[1024px]:text-5xl max-[768px]:text-[42px]"> Get in Touch</h1>
          </div>
          <p className="text-right text-2xl font-semibold text-[var(--color-secondary)] max-[768px]:text-[22px]">HIT ME UP 🤙🏻!!!</p>
        </div>
      </div>
    </div>
  );
}
