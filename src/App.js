import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Recipes from "./pages/Recipes";
import RecipeCard from "./pages/RecipeCard";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Recipes />}></Route>
        <Route path="/recipecard/:id" element={<RecipeCard />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
