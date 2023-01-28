import { useNavigate } from "react-router-dom";

const PaginationButton = ({ page }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center font-semibold text-slate-50 mt-6">
      <button
        className="bg-slate-700 rounded shadow px-3 py-1 mx-2"
        onClick={() => navigate(`?page=${page - 1}`)}
      >
        Previous Page
      </button>
      <button
        className="bg-slate-700 rounded shadow px-3 py-1 mx-2"
        onClick={() => navigate(`?page=${page + 1}`)}
      >
        Next Page
      </button>
    </div>
  );
};
export default PaginationButton;
