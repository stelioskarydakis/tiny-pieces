import { useState, useEffect } from "react";
import Tours from "../components/tours/Tours";
import Navbar from "../components/shared/Navbar";
import Loading from "../components/tours/Loading";
import "../styles/tours-page-styles.css";

const url = "https://projects-data.onrender.com/tours";

const ToursPage = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Navbar />
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <Navbar />
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default ToursPage;
