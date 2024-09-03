import s from "./Header.module.scss";

import LogoML from "../../../assets/images/Logo_ML.png";
import Search from "../search/Search";

const Header = () => {
  return (
    <div className={s.headerContainer}>
      <img src={LogoML} alt="" />
      <Search />
    </div>
  );
};

export default Header;
