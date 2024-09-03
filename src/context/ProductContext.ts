/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from "react";
import { ProductList } from "../models/interface/Product";

interface ProductContextType {
    searchResults: ProductList | any;
        mutate: () => Promise<ProductList | any>;
        isLoading: boolean;
        query: string | null
        error: any; 
    } 


export const ProductContext = createContext<ProductContextType | null>(null)