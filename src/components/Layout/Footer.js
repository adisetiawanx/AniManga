import { Link } from "react-router-dom";

const Footer = () => (
  <div className="bg-slate-700  mt-10">
    <div className="container md:flex md:justify-between md:items-center text-slate-50 ml-2 md:mx-auto py-5  ">
      <div className="mb-5 md:mb-0">
        <h4 className="text-2xl text-center md:text-left font-bold">
          AniManga
        </h4>
      </div>
      <ul className=" text-lg underline underline-offset-2 hidden md:flex">
        <li>
          <a href="#">Home</a>
        </li>
        <li className="mx-5">
          <Link to={"/anime"}>Anime</Link>
        </li>
        <li>
          <Link to={"/manga"}>Manga</Link>
        </li>
      </ul>
      <div className="mb-5 md:mb-0 ">
        <h4 className="text-xl">Thanks</h4>
        <p className="text-slate-300">
          This Website created with ❤️ by{" "}
          <a
            className="underline"
            href="https://github.com/adisetiawanx"
            target="_blank"
            rel="noreferrer"
          >
            Adi Setiawan
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
