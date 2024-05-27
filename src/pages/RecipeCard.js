import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Reviews from "../components/Reviews";
import ReviewCard from "../components/ReviewCard";

function RecipeCard() {
  const [data, setData] = useState({});
  const { id } = useParams();
  console.log(id);

  const fetchApi = async () => {
    const data = await axios.get(`https://dummyjson.com/recipes/${id}`);
    setData(data.data);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchApi();
  }, []);
  console.log(data);
  return (
    <div className="mt-5 ">
      {data.id ? (
        <Container>
          <Row>
            <Col lg={6} md={6}>
              <div className="imgcntr">
                <img src={data.image} alt="" className="rounded" />
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="mt-3">
                <h2>{data.name}</h2>
                <h4>{data.cuisine}</h4>
                <p>
                  <span
                    className={
                      data.difficulty === "Easy"
                        ? "bg-success text-white"
                        : "bg-warning text-dark"
                    }
                  >
                    {data.difficulty}
                  </span>
                </p>
                <p className="tags">#{data.tags.join(" #")}</p>
                <p className="fw-semibold">
                  Rating : {data.rating}⭐⭐⭐⭐ ({data.reviewCount})
                </p>
                <p className="fw-semibold">
                  Meal Type : {data.mealType.join(",")}
                </p>
                <div className="d-flex flex-wrap justify-content-evenly lists">
                  <div>
                    <div className="r1">{data.prepTimeMinutes}</div>
                    <p className="text-center" style={{ width: "70px" }}>
                      Prepataion Min
                    </p>
                  </div>
                  <div>
                    <div className="r1">{data.cookTimeMinutes}</div>
                    <p className="text-center" style={{ width: "70px" }}>
                      Cooking Time Min
                    </p>
                  </div>
                  <div>
                    <div className="r1">{data.servings}</div>
                    <p className="text-center" style={{ width: "70px" }}>
                      Servings Count
                    </p>
                  </div>
                  <div>
                    <div className="r1">{data.caloriesPerServing}</div>
                    <p className="text-center" style={{ width: "70px" }}>
                      Calories Serving
                    </p>
                  </div>
                </div>
                <Accordion className="acctxt">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Ingredients</Accordion.Header>
                    <Accordion.Body>
                      {data.ingredients.join(", ")}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Instructions</Accordion.Header>
                    <Accordion.Body>{data.instructions}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
          </Row>
          <ReviewCard />
          <Reviews />
        </Container>
      ) : (
        <div className="text-center spinnerdiv">
          <img src="/images/spinner.gif" alt="" />
        </div>
      )}
    </div>
  );
}

export default RecipeCard;
