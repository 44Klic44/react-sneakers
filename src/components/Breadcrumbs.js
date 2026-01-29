// components/Breadcrumbs.jsx
import { Link, useLocation } from "react-router-dom";

const breadcrumbMap = {
  "/favorites": "Избранное",
  "/orders": "Мои заказы",
};

function Breadcrumbs() {
  const location = useLocation();
  const current = breadcrumbMap[location.pathname];

  if (!current) return null;

  return (
    <div className="breadcrumbs">
      <Link to="/">Главная</Link>
      <span> / </span>
      <span>{current}</span>
    </div>
  );
}

export default Breadcrumbs;
