import { Link } from "react-router-dom";

const LinkBackHome = () => {
  return (
    <Link to={"/"} className="smCustome:text-sm text-header-400 underline">
      بازگشت به صفحه اصلی
    </Link>
  );
}

export default LinkBackHome