
import { ProductContext } from "./ProductContext"
import React from 'react'
import { useLocation } from "react-router-dom";
import { fetchApi } from "../services/api";
import useSWRImmutable from "swr/immutable";

interface ProductProviderProps {
children: React.ReactNode
}

const {getSearchResults} = fetchApi()

export const ProductProvider = ({children}: ProductProviderProps) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("search") || '';
    const {
        data: searchResults,
        mutate,
        isLoading,
        error,
      } = useSWRImmutable(query,() =>  getSearchResults(query));
    

    return (
        <ProductContext.Provider value={{searchResults, mutate, query, isLoading, error}}>
            {children}
        </ProductContext.Provider>
    )
}
