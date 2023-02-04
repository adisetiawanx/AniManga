import { useState } from "react";
import { useAuthContext } from "../contexts/auth-context";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!password || !email) {
      setError("Input is not valid");
      return;
    }

    try {
      await login(email.trim(), password.trim());
      setError(false);
      navigate("/");
    } catch (error) {
      setError("Cannot Login!");
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center container mx-auto h-[75vh]">
      <div className=" p-6 rounded-lg shadow-lg border border-slate-300 bg-white md:w-[70%] w-[95%] mx-auto">
        {error && (
          <div className="flex justify-center items-center w-full border-red-500 border-2 bg-red-400 rounded-md py-1 mb-5">
            <span className="text-white">{error}</span>
          </div>
        )}
        <form onSubmit={submitHandler}>
          <div className="w-full form-group mb-6">
            <label
              for="exampleInputEmail2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mb-6">
            <label
              for="exampleInputPassword2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none"
              id="exampleInputPassword2"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-slate-600
      text-white
      font-medium
      text-xs
      leading-tight
      rounded
      shadow-md
      hover:bg-slate-700 hover:shadow-lg
      focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-slate-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            LOGIN
          </button>
          <p className="text-gray-800 mt-6 text-center">
            Dont have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:underline focus:underline transition duration-200 ease-in-out"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
