import React, { useEffect } from "react";
import "./Search.css";

const baseUrl = "http://openlibrary.org";

export function searchBooks(query) {
  const url = new URL(baseUrl + "/search.json");
  url.searchParams.append("title", query);

  return fetch(url).then((response) => response.json());
}

export function Search() {
  const [results, setResults] = React.useState(0);
  const [valueInput, setValueInput] = React.useState({
    title: "",
  });
  

  useEffect(() => {
    if (valueInput.title !== "") {
      alert(`Anda akan mencari buku dengan judul ${valueInput.title}`);
    }
  }, [valueInput.title]);

  const handleSearch = (event) => {
    setValueInput({ ...valueInput, title: event.target.value });
    searchBooks(event.target.value).then((response) => {
      setResults(response.docs);
    });
  };

  const resultList = (results || []).map((book) => (
    <tr key={book.key}>
      <td>{book.title}</td>
      <td>{book.author_name && book.author_name.join(", ")}</td>
      <td>{book.first_publish_year}</td>
    </tr>
  ));
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <div className='cari'>
        <div></div>
        <div>
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Insert book name"
          size="50"
        />
        </div>
      </div>
      <h1>Search Result</h1>
      <div>
        <table border='1' style={{borderCollapse:'collapse'}}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Pub Year</th>
            </tr>
          </thead>
          <tbody>{resultList}</tbody>
        </table>
      </div>
    </div>
  );
}
