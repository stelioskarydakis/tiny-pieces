import { useState } from "react";
import data from "../components/accordion/data";
import Questions from "../components/accordion/Questions";
import "../styles/accordion-page-styles.css";
import Navbar from "../components/shared/Navbar";

const AccordionPage = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <Navbar />
      <Questions questions={questions} />
    </main>
  );
};

export default AccordionPage;
