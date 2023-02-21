import React, { useState } from "react";
import SearchResult from "../SearchResult";

export default function ByName() {
  //save the user input in a local state (call it searchInput), then fetch that country on submit, then save the received country in another local state (call it country) - always check how does the response look like using console.log before saving it in the state.

  const [searchInput, setSearchInput] = useState();
  const [country, setCountry] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://restcountries.com/v2/name/${searchInput}`)
      .then((response) => response.json())
      .then((data) => setCountry(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ padding: "30px" }}>
        <input onChange={handleChange} type="text" />
        <button>search</button>
      </form>
      {/* show the country you received from fetch and saved in the local state (use SearchResult component to display that country) */}
      {country.map((item, i) => (
        <SearchResult key={i} country={item} />
      ))}
    </div>
  );
}
