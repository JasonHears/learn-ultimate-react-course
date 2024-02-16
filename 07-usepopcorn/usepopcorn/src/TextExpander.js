import { useState } from "react";

export default function TextExpander({
  collapsedNumWords = 30,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className = "",
  buttonStyle = "",
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const collapsedString = children
    .split(" ")
    .slice(0, collapsedNumWords)
    .join(" ");

  const isLongText = children.split(" ").length > collapsedNumWords;

  const displayText =
    isLongText && !isExpanded ? collapsedString + ". . ." : children;

  const btnStyle = {
    ...buttonStyle,
    background: "none",
    border: "none",
    font: "inherit",
    marginLeft: "6px",
    color: buttonColor,
    cursor: "pointer",
  };

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded((v) => !v)} style={btnStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
