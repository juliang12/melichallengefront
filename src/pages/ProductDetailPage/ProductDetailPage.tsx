import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetchApi } from "../../services/api";
import s from "./ProductDetailPage.module.scss";
import Categories from "../../components/common/categories/Categories";
import Loader from "../../components/common/loader/Loader";

const { getProductDetail } = fetchApi();

const ProductDetailPage = () => {
  const params = useParams();
  const productId = params.id;
  const { data, isLoading } = useSWR(productId, getProductDetail);

  if (isLoading) return <div data-testid="spinner" className={s.loaderContainer}><Loader/></div>;

if (data) return (
    <div className={s.container} data-testid="product-details-container">
      <Categories categoryId={data.categoryId} />
      <div className={s.content}>
        <div className={s.productsContainer}>
          <div className={s.imageContainer}>
            <img className={s.image} src={data?.picture} alt="" />
          </div>
          <div className={s.right}>
            <p className={s.new}>{data.condition === 'new' && 'Nuevo -'}{' '}{data.soldQuantity} vendidos</p>
            <h2 className={s.title}>{data.title}</h2>
            <h1>{data.price}</h1>
            <button className={s.button}>Comprar</button>
          </div>
        </div>
          <div>
            <h3 className={s.descriptionTitle}>Descripción del producto</h3>
            <p className={s.paragraph}>{data.description}</p>
          </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
