import "./about_me_style.css";

type AboutMeWidgetProps = {
  name: string;
  subtitle: string;
  intro: string;
};


export default function AboutMeWidget({name, subtitle, intro}: AboutMeWidgetProps) {
  return (
    <div className="about">
      <h1 className="name">{name}</h1>
      <div style={{ marginBottom: "20px" }}></div>
      <p className="sub-title">{subtitle}</p>
      <div style={{ marginBottom: "12px" }}></div>
      <p className="intro-text">
        {intro}
      </p>
    </div>
  );
}
