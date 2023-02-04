import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/auth-context";

const Header = () => {
  const { currentUser } = useAuthContext();

  return (
    <>
      {" "}
      <header className="w-full bg-slate-600 py-3 px-5 shadow-md">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-slate-50 text-2xl">AniManga</h1>
            <nav className="text-lg font-semibold  text-slate-50">
              <ul className="flex">
                <li className="bg-slate-800 rounded-md shadow px-3 py-1 mx-5">
                  {!currentUser ? (
                    <Link to={"/login"}>Login</Link>
                  ) : (
                    currentUser.email
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <nav className="w-full text-lg font-semibold underline bg-slate-700 underline-offset-2 py-1  mb-10 text-slate-50">
        <ul className="flex justify-center">
          <li className="mx-3">
            <Link to={"/anime"}>Anime</Link>
          </li>
          <li className="mx-3">
            <Link to={"/manga"}>Manga</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
