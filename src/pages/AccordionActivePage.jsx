import { useState } from "react";
import data from "../components/accordion-active/data";
import Questions from "../components/accordion-active/Questions";
import Navbar from "../components/shared/Navbar";

function AccordionActivePage() {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(1);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <main>
      <Navbar />
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
}

export default AccordionActivePage;
