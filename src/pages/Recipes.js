import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ImageRound from "../components/ImageRound";
import { Link } from "react-router-dom";
import HeroSec from "../components/HeroSec";

function Recipes() {
  const [recipedata, setRecipeData] = useState([]);
  const [recipeCopy, setRecipeCopy] = useState([]);
  const [searchData, setSearchData] = useState("");
  const fetchApi = async () => {
    const data = await axios.get("https://dummyjson.com/recipes");
    setRecipeData(data.data.recipes);
    setRecipeCopy(data.data.recipes);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const searchResult = () => {
    const data = recipedata.filter((i) =>
      (i.name + i.tags.join("") + i.mealType.join(""))
        .toLowerCase()
        .trim()
        .includes(searchData.toLowerCase().trim())
    );
    setRecipeCopy(data);
    setSearchData("");
  };

  const allSearch = () => {
    setRecipeCopy(recipedata);
  };
  const easySearch = () => {
    const data = recipedata.filter((i) => i.difficulty === "Easy");
    setRecipeCopy(data);
  };
  const mediumSearch = () => {
    const data = recipedata.filter((i) => i.difficulty === "Medium");
    setRecipeCopy(data);
  };

  return (
    <div>
      <HeroSec />
      <ImageRound />

      <Container fluid>
        <h4 className="m-0 mt-3">
          <b>Check your Recipies</b>
        </h4>
        <div className="filterbtn d-flex my-3 gap-3 flex-wrap">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Search for your recipes here"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />

          <button className="me-4 btn btn-success" onClick={searchResult}>
            Search
          </button>
          <button className="btn border filterbutton" onClick={allSearch}>
            <b>All</b>
          </button>
          <button className="btn border filterbutton" onClick={easySearch}>
            <b>
              <img src="images/filter.png" alt="" style={{ height: "20px" }} />{" "}
              Easy
            </b>
          </button>

          <button className="btn border filterbutton" onClick={mediumSearch}>
            <b>
              <img src="images/filter.png" alt="" style={{ height: "20px" }} />{" "}
              Medium
            </b>
          </button>
        </div>
        {recipeCopy.length > 0 ? (
          <div className="d-flex flex-wrap gap-4 justify-content-center mt-4">
            {recipeCopy.map((i) => (
              <Link
                to={`/recipecard/${i.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card style={{ width: "16rem" }} className="border-0">
                  <Card.Img
                    variant="top"
                    src={i.image}
                    className="rounded shadow cardimg"
                  />
                  <Card.Body>
                    <Card.Title style={{ height: "40px" }}>{i.name}</Card.Title>
                    <div className="d-flex justify-content-between">
                      <Card.Text className="m-0">
                        <b>{i.cuisine}</b>
                      </Card.Text>
                      <Card.Text>
                        <i class="fa-regular fa-clock"></i> {i.prepTimeMinutes}{" "}
                        mins{" "}
                      </Card.Text>
                    </div>
                    <Card.Text className="d-flex justify-content-between">
                      {i.rating}⭐⭐⭐⭐({i.reviewCount})
                      <div
                        className={`type ${
                          i.difficulty === "Easy"
                            ? "text-success"
                            : "text-warning"
                        }`}
                      >
                        <p className="fw-semibold" style={{ fontSize: "15px" }}>
                          {i.difficulty}
                        </p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center spinnerdiv">
            <img src="images/spinner.gif" alt="" />
          </div>
        )}
      </Container>
    </div>
  );
}

export default Recipes;
