export interface Author {
  name: string;
  lastname: string;
}

export interface Price {
  currency: string;
  amount: string;
  decimals: string;
}

export interface ProductDto {
  condition: string;
  free_shipping: boolean;
  id: string;
  picture: string;
  price: Price;
  thumbnail: string;
  title: string;
}

export interface Product {
  condition?: string;
  free_shipping?: boolean;
  id: string;
  picture: string;
  price: string;
  thumbnail?: string;
  title: string;
}

export interface ProductList {
  author: Author;
  categories: string[];
  items: ProductDto[];
}

export interface Category {
  id: string;
}

export interface Item {
  id: string;
  title: string;
  category: Category;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string; 
}

