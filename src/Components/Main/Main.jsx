import "./Main.css";
import React from "react";
import Banner from "../../img/preview.png";
import Card from "../Card/Card";
import axios from "axios";
import { useState } from "react";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  function searchBook(event) {
    if (event.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyBdtSBwYNdRQ6lflWKWJVaNkLmwc2svjpM" + '&maxResults=40'
        )
        .then((res) => setBookData(res.data.items))
        .catch((err) => console.log(err));
    }
  }
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like <br /> a body without a soul.
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchBook}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src={Banner} alt="" />
        </div>
      </div>
      <div className="container">
        {
          <Card book={bookData} />
          }
        </div>
    </>
  );
};

export default Main;
