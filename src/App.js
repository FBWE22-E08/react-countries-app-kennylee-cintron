import "./App.css";
import AllCountries from "./components/views/AllCountries";
import ByRegion from "./components/views/ByRegion";
import ByName from "./components/views/ByName";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CountryCard from "./components/CountryCard";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* show the Header component, then add the routes to the pages components*/}
        <Header />
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/by-region" element={<ByRegion />} />
          <Route path="/by-name" element={<ByName />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
