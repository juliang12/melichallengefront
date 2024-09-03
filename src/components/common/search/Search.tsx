import IconSearch from "../../../assets/images/ic_Search.png";
import s from "./Search.module.scss";

import useSearch from "../../../hooks/useSearch";

const Search = () => {
  const { searchValue, handleSearch, handleSubmit } = useSearch();

  return (
    <form onSubmit={handleSubmit} className={s.searchContainer} data-testid="search-form">
      <input
        onChange={handleSearch}
        value={searchValue}
        placeholder="Nunca dejes de buscar"
        className={s.search}
        type="text"
      />
      <button type="submit" className={s.searchIcon}>
        <img src={IconSearch} alt="icon" />
      </button>
    </form>
  );
};

export default Search;
