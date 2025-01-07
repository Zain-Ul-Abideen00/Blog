import React from "react";

interface InsightRollProps {
  insights: string[];
}

const InsightRoll: React.FC<InsightRollProps> = ({ insights }) => {
  return (
    <div className="w-full bg-accent dark:bg-accentDark text-light dark:text-dark whitespace-nowrap overflow-hidden">
      <div className="animate-roll  w-full py-2 sm:py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-sm sm:text-base">
        {insights.map((text, index) => (
          <div key={index}>
            {text} <span className="px-4">|</span>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightRoll;
