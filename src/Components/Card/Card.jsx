import React from "react";
import "./Card.css";
import Book from "../../img/book.jpg";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Card = ({ book }) => {
  console.log(book);
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState()
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;

          let price = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail != undefined) {
          return (
            <>
              <div className="card" onClick={() => {setShow(true); setBookItem(item)}}>
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="amount"> {price ? "$" + price : "Not for sale"}</p>
                </div>
              </div>
              <Modal show={show} item={bookItem} onClose={()=> setShow(false)} />
            </>
          );
        }
      })}
    </>
  );
};

export default Card;
