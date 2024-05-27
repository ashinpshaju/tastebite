import React from "react";
import { Container } from "react-bootstrap";

function ImageRound() {
  return (
    <div>
      <Container fluid>
        <h4 className="m-0 mt-3">
          <b>What's on your mind?</b>
        </h4>
        <div className="imagediv mt-2 d-flex gap-3 ">
          <div className="box">
            <img src="https://cdn.dummyjson.com/recipe-images/1.webp" alt="" />
            <p>Pizza</p>
          </div>
          <div className="box">
            {" "}
            <img src="https://cdn.dummyjson.com/recipe-images/2.webp" alt="" />
            <p>Stir-Fry</p>
          </div>
          <div className="box">
            {" "}
            <img src="https://cdn.dummyjson.com/recipe-images/3.webp" alt="" />
            <p>Cookies</p>
          </div>
          <div className="box">
            {" "}
            <img src="https://cdn.dummyjson.com/recipe-images/4.webp" alt="" />
            <p>Pasta</p>
          </div>
          <div className="box">
            {" "}
            <img src="https://cdn.dummyjson.com/recipe-images/5.webp" alt="" />
            <p>Salsa</p>
          </div>

          <div className="box">
            {" "}
            <img src="https://cdn.dummyjson.com/recipe-images/6.webp" alt="" />
            <p>Salad</p>
          </div>
          <div className="box">
            {" "}
            <img src="https://cdn.dummyjson.com/recipe-images/7.webp" alt="" />
            <p>Bruschetta</p>
          </div>

          <div className="box">
            {" "}
            <img src="https://cdn.dummyjson.com/recipe-images/11.webp" alt="" />
            <p>Biriyani</p>
          </div>
          <div className="box">
            {" "}
            <img src="https://cdn.dummyjson.com/recipe-images/12.webp" alt="" />
            <p>Karahi</p>
          </div>
          <div className="box">
            {" "}
            <img src="https://cdn.dummyjson.com/recipe-images/13.webp" alt="" />
            <p>Keema</p>
          </div>
          <div className="box">
            {" "}
            <img src="https://cdn.dummyjson.com/recipe-images/14.webp" alt="" />
            <p>Kebab</p>
          </div>
          <div className="box">
            {" "}
            <img src="https://cdn.dummyjson.com/recipe-images/15.webp" alt="" />
            <p>Roti</p>
          </div>
          <div className="box">
            {" "}
            <img src="https://cdn.dummyjson.com/recipe-images/16.webp" alt="" />
            <p>Soup</p>
          </div>
          <div className="box">
            {" "}
            <img src="https://cdn.dummyjson.com/recipe-images/17.webp" alt="" />
            <p>Tagine</p>
          </div>
          <div className="box">
            {" "}
            <img src="https://cdn.dummyjson.com/recipe-images/18.webp" alt="" />
            <p>Bibimbap</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ImageRound;
