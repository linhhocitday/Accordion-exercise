import React, { useState } from "react";
import "./main.css";
import HighlightSection from "./components/HighlightSection";
import HiddenContent from "./components/HiddenContent";

const contents = [
  {
    id: 1,
    title: "Hello",
    content: "My name is Linh",
    active: false,
  },
  {
    id: 2,
    title: "I'm 20",
    content: "And I'm studying at FPT Uni",
    active: false,
  },
  {
    id: 3,
    title: "My hometown is Yen Bai city",
    content: "Which is located in the North of Vietnam",
    active: false,
  },
];

const App = () => {
  const [sections, setSections] = useState(contents);

  const activeSection = (id) => {
    let activeSection = sections.find((section) => section.active === true);

    setSections((sections) => {
      return sections.map((section) => {
        if (activeSection) {
          activeSection.active = false;
        }

        if (section.id === id) {
          if (activeSection && section.id === activeSection.id) {
            return { ...section, active: false };
          }

          return { ...section, active: true };
        }

        return { ...section };
      });
    });
  };

  const renderSections = sections.map((section) => (
    <li key={section.id} data-active={section.active}>
      <HighlightSection
        active={section.active}
        onClick={() => activeSection(section.id)}
      >
        {section.title}
      </HighlightSection>
      <HiddenContent>{section.content}</HiddenContent>
    </li>
  ));

  return (
    <div className="container">
      <ul>{renderSections}</ul>
    </div>
  );
};

export default App;
