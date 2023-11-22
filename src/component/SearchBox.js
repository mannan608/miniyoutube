import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searched } from "../features/filter/FilterSlice";

const SearchBox = () => {
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));
  };

  return (
    <form className="d-flex" role="search" onSubmit={handlesubmit}>
      <input
        className="form-control me-2"
        type="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default SearchBox;
