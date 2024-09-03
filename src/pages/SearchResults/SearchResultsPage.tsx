import Skeleton from "react-loading-skeleton";
import Card from "../../components/common/card/Card";
import Categories from "../../components/common/categories/Categories";
import useProductProvider from "../../hooks/useProductProvider";
import { Product } from "../../models/interface/Product";

import s from "./SearchResultsPage.module.scss";
import 'react-loading-skeleton/dist/skeleton.css'

const SearchResultsPage = () => {
  const { context } = useProductProvider();
  const { isLoading, searchResults } = context;
  
  return (
    <div className={s.container}>
      <Categories categoryId={searchResults?.items[0]?.categoryId} />
      <div className={s.productsContainer}>
      {isLoading ? (
          Array(4).fill(null).map((_, index) => (
            <div key={index} className={s.productSkeleton}>
              <Skeleton height={180} count={1} />
            </div>
          ))
        ) : (
          searchResults?.items?.map((product: Product) => (
            <Card key={product.id} {...product} />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
