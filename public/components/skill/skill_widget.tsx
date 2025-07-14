import "./skill_style.css";

type SkillWidgetProps = {
  list: string[];
};

export default function SkillWidget({ list }: SkillWidgetProps) {
  return (
    <>
      <div className="skillwidget">
        {list.map((item, index) => (
          <div key={index} className="skillcard">
            <div className="skilltext">{item}</div>
          </div>
        ))}
      </div>
    </>
  );
}
