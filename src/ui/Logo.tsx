import { Link } from "react-router-dom";
interface LogoPropType{
  size:'small' | 'large'
}

const Logo = ({size}:LogoPropType) => {
  const styles =
    size === "large"
      ? " w-[6.5rem] md:w-[9.5rem]"
      : "w-[6.5rem]";
  return (
    <Link to={'/'}>
    <img 
    className={`${styles}`}
      src="https://nobat.ir/public/ui_v2_0/images/uiv2/nobatLogo.png"
      alt="نوبت دات ای ار"
    />
    </Link>
  );
}

export default Logo