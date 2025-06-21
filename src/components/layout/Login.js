import { useRef, useState } from "react";
import Header from "../layout/Header";
import {
  NETFLIX_BACKGROUND_IMG_URL,
  DEFAULT_USER_AVATAR,
} from "../../utils/constants/constants";
import { checkValidData } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/config/firebase";
import { addUser } from "../../utils/store/slices/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonCLick = () => {
    //Validate data
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: DEFAULT_USER_AVATAR,
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName, photoURL }));
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover"
          alt="background-image"
          src={NETFLIX_BACKGROUND_IMG_URL}
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 bg-black absolute w-full md:w-3/12 my-36 mx-auto right-0 left-0 rounded-lg text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-600"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          onClick={handleButtonCLick}
          className="p-4 my-6 rounded-lg bg-red-700 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer"
          onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered ? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
