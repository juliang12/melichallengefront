import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import useProductProvider from "./useProductProvider";



const useSearch = () => {
  const {context} = useProductProvider()
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(context.query || '');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      navigate(`/items?search=${encodeURIComponent(searchValue || "")}`);
      
      await context.mutate();
    } catch (error) {
      console.error("Error al realizar la búsqueda:", error);
    }
  };

  return {
    searchValue,
    handleSearch,
    handleSubmit,
  };
};

export default useSearch;
