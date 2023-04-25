import { useState } from "react";
import data from "../components/birthday/data";
import List from "../components/birthday/List";
import "../styles/birthdays-page-styles.css";
import Navbar from "../components/shared/Navbar";

const BirthdaysPage = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <Navbar />
      <section className="container-birthdays">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  );
};

export default BirthdaysPage;
