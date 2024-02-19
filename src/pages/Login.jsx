import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

export const Login = () => {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }

  return (
    <div className="sm:max-w-[840px] m-auto mt-4">
      <h1 className="sm:text-5xl text-orange-600 text-bold text-center">
        Please Login To See The Future!
      </h1>
      <div className="flex m-auto flex-col justify-center items-center my-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <input
              className="w-[300px] mx-auto sm:w-[500px] px-2 py-1 bg-gray-100 sm:mx-4 rounded-lg my-4 focus:border-orange-400"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              type="email"
              placeholder="Email"
            />
            <input
              className="w-[300px] mx-auto sm:w-[500px] px-2 py-1 bg-gray-100 sm:mx-4 rounded-lg my-4 focus:border-sky-500"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              type="password"
              placeholder="Password"
            />
            <button
              type="submit"
              className="w-[200px] sm:w-[300px] p-2 bg-orange-500 text-white rounded-full mx-auto"
            >
              Sign In
            </button>
          </div>
          <h1 className="text-xl my-10 mx-auto text-center">
            If you dont have an account, please{" "}
            <Link to="/signup">
              <button className="font-bold"> Create an account!</button>
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};
