import { SetStateAction, useState } from "react";

interface SearchFormProps {
  getCategory: (category: string) => void;
}

export const SearchForm = ({ getCategory }: SearchFormProps): JSX.Element => {
  const [category, setCategory] = useState("");

  const consumeSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    getCategory(category);
  };

  const ChangeCategory = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setCategory(event.target.value);
  };
  return (
    <form className="search-form" onSubmit={consumeSubmit}>
      <div className="row">
        <label htmlFor="search" className="col-1 col-form-label">
          Search:{" "}
        </label>
        <div className="col-4">
          <input
            type="text"
            id="search"
            className="search form-control"
            onChange={ChangeCategory}
            value={category}
          />
        </div>
        <button type="submit" className="btn btn-info btn-sm col-1">
          Go
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
