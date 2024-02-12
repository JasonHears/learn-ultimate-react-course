import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import * as data from "./data.js";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src={data.photo} alt={data.name} className="avatar" />;
}

function Intro() {
  return (
    <div className="intro">
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skills skill-list">
      {data.skills.map((skill) => (
        <Skill key={skill.name} {...skill} />
      ))}
    </ul>
  );
}

function Skill({bgColor, name, emoji, level}) {
  
  return (
    <li className="skill" style={{ backgroundColor: bgColor }}>
      <span style={{ backgroundColor: bgColor }}>{name}</span>
      <span style={{ backgroundColor: bgColor }}>{
        emoji !== undefined 
        ? emoji : level==="beginner" 
        ? `👨🏻‍🏫` : level==="intermediate" 
        ? `🧑🏻‍💻` : level==="advanced" 
        ? `👨🏻‍🔬` : level==="expert" 
        ? `🥷🏻` : `🪫`
      }</span>
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
