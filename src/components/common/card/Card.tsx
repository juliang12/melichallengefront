import { useNavigate } from "react-router-dom";
import { Product } from "../../../models/interface/Product";
import s from "./Card.module.scss";

const Card = ({ picture, price, title, id }: Product) => {
  const navigate = useNavigate()
  return (
    <div className={s.cardContainer}>
      <div onClick={() => navigate(`/item/${id}`)} className={s.imgContainer}>
        <img className={s.image} src={picture} alt={title} />
      </div>
      <div className={s.content}>
        <div className={s.price}>{price}</div>
        <p className={s.description}>{title}</p>
      </div>
      <div className={s.cityContainer}>
        <p className={s.city}>{}</p>
      </div>
    </div>
  );
};

export default Card;
