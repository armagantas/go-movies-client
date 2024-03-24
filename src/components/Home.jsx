import React from "react";
import TicketPhoto from "../../src/images/movie-ticket.jpeg";
const Home = () => {
  return (
    <>
      <div className="text-center">
        <h2>Find a movie</h2>
        <hr />
        <img
          src={TicketPhoto}
          alt="ticketPhoto"
          style={{ width: "200px", height: "200px" }}
        />
      </div>
    </>
  );
};

export default Home;
