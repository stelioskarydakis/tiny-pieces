import { useState, useEffect } from "react";
import BtnContainer from "../components/tabs/BtnContainer";
import JobInfo from "../components/tabs/JobInfo";
import Navbar from "../components/shared/Navbar";
import "../styles/tabs-page-styles.css";

const url = "https://projects-data.onrender.com/jobs";

const TabsPage = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <main>
        <Navbar />
        <section className="jobs-center">
          <div className="loading"></div>
        </section>
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <section className="jobs-center">
        <BtnContainer
          jobs={jobs}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
        <JobInfo jobs={jobs} currentItem={currentItem} />
      </section>
    </main>
  );
};

export default TabsPage;
