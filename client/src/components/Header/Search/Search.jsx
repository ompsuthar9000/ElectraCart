import "./Search.scss";
import useFetch from "../../../hooks/useFetch";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Search = ({ setShowSearch }) => {
  const [query, setquery] = useState("");
  const navigate = useNavigate();

  const queryinputhandler = (e) => {
    setquery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if (query.length === 0) {
    data = null;
  }

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for  products"
          value={query}
          onChange={queryinputhandler}
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {query.length !== 0 &&
            data.data.map((item) => (
              <div
                className="search-result-item"
                onClick={() => {
                  navigate(`/product/${item.id}`);
                  setShowSearch(false);
                }}
                key={item.id}
              >
                <div className="img-container">
                  <img
                    src={
                      process.env.REACT_APP_DEV_URL +
                      item?.attributes?.img?.data?.[0]?.attributes?.url
                    }
                    alt=""
                  />
                </div>
                <div className="prod-details">
                  <span className="name">{item.attributes.title}</span>
                  <span className="desc">{item.attributes.descrption}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
