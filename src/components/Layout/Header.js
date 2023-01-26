import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-slate-600 py-3 px-5 mb-5 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-slate-50 text-2xl">AniManga</h1>
          <nav className="text-lg text-slate-50">
            <ul className="flex">
              <li className="mx-3">
                <a href="/">Home</a>
              </li>
              <li className="mx-3">
                <a href="/">About</a>
              </li>
              <li className="mx-3">
                <a href="/">Anime</a>
              </li>
              <li className="mx-3">
                <a href="/">Manga</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
