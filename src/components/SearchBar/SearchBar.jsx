import { Notify } from 'notiflix';
import { useSearchParams } from 'react-router-dom';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('search') ?? '';

  const handleSubmit = evt => {
    evt.preventDefault();
    const inputText = evt.target.input.value.trim().toLowerCase();
    if (!inputText || inputText === query) {
      Notify.info(`Change your search query`);
      return;
    }
    setSearchParams({ search: inputText });
  };

  return (
    <form className="SearchForm input-group mb-3" onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="text"
        name="input"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
        defaultValue={query}
      />
      <button type="submit" className="btn btn-outline-secondary">
        Search
      </button>
    </form>
  );
};
export default SearchBar;
