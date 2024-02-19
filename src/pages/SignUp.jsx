import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  }

  return (
    <div className="sm:max-w-[840px] m-auto mt-4">
      <h1 className="sm:text-5xl text-orange-600 text-bold text-center">
        Please Create an Account To See The Future!
      </h1>
      <div className="flex m-auto flex-col justify-center items-center my-8">
        <form onSubmit={handleSignUp}>
          <div className="flex flex-col">
            <input
              className="sm:w-[500px] px-2 py-1 bg-gray-100 mx-4 rounded-lg my-4 focus:border-orange-400"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              type="email"
              placeholder="Email"
            />
            <input
              className="sm:w-[500px] px-2 py-1 bg-gray-100 mx-4 rounded-lg my-4 focus:border-sky-500"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              type="password"
              placeholder="Password"
            />
            <button
              type="submit"
              className="p-2 bg-orange-500 text-white rounded-full w-full"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
