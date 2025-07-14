import "./styles.css";
import SocialMediaCardWidget from "../../../public/components/social_media_card/social_media_card_widget";

export default function ContactMe() {
  return (
    <div className="contact-me">
      <div className="contact-me-section">
        <div className="textual-content-mobile">
          <h1>Don&apos;t Forget To Get in Touch</h1>
          <div style={{ marginBottom: "20px" }}></div>
          <p>HIT ME UP 🤙🏻!!!</p>
          <div style={{ marginBottom: "24px" }}></div>
        </div>
        <div className="social-media">
          <SocialMediaCardWidget
            scr="linkedin"
            name="Linkedin"
            username="gitoputrowardana"
            url="https://linkedin.com/in/gitoputrowardana/"
          />
          <div style={{ marginBottom: "24px" }}></div>
          <SocialMediaCardWidget
            scr="whatsapp"
            name="Whatsapp"
            username="+62 8112518692"
            url="https://wa.me/628112518692"
          />
          <div style={{ marginBottom: "24px" }}></div>
          <SocialMediaCardWidget
            scr="mail"
            name="Gmail"
            username="gitoputrowardana@gmail.com"
            url="mailto:gitoputrowardana@gmail.com"
          />
        </div>
        <div className="textual-content">
          <div>
            <h1> Don&apos;t</h1>
            <div style={{ marginBottom: "8px" }}></div>
            <h1> Forget To</h1>
            <div style={{ marginBottom: "8px" }}></div>
            <h1> Get in Touch</h1>
          </div>
          <p>HIT ME UP 🤙🏻!!!</p>
        </div>
      </div>
    </div>
  );
}
