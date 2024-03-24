import React from "react";
import TicketPhoto from "../../src/images/movie-ticket.jpeg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="text-center">
        <h2>Find a movie</h2>
        <hr />
        <Link to="/movies">
          <img
            src={TicketPhoto}
            alt="ticketPhoto"
            style={{ width: "200px", height: "200px" }}
          />
        </Link>
      </div>
    </>
  );
};

export default Home;
