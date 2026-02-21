import React from "react";

const Skills = [
  { id: 1, skillImg: "/assets/images/icons/html.svg" },
  { id: 2, skillImg: "/assets/images/icons/css.svg" },
  { id: 3, skillImg: "/assets/images/icons/javascript.svg" },
  { id: 4, skillImg: "/assets/images/icons/node-js.svg" },
  { id: 5, skillImg: "/assets/images/icons/react.svg" },
  { id: 6, skillImg: "/assets/images/icons/wordpress.svg" },
  { id: 7, skillImg: "/assets/images/icons/mongodb.svg" },
  { id: 8, skillImg: "/assets/images/icons/mysql.svg" },
];

const SkillsSection = () => {
  return (
    <div className="max-w-8xl mx-auto px-2 md:px-6">
      <h3 className=""></h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-5">
        {Skills.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 md:p-8 h-[110px] md:h-[140px] w-full flex justify-center items-center rounded-2xl"
          >
            <img
              src={item.skillImg}
              className="h-14 md:h-20 w-auto"
              alt={`skill-${item.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
