import React, { useEffect } from "react";
import NetflixLogo from "../utils/assets/svg/netflix-logo.svg";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { APP_ROUTES, DEFAULT_USER_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate(APP_ROUTES.BROWSE);
      } else {
        dispatch(removeUser());
        navigate(APP_ROUTES.LOGIN);
      }
    });
    //Unsubscribe when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate(APP_ROUTES.ERROR);
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen">
      <div className="m-6 flex justify-between">
        <img
          className="w-28"
          alt="netflix-logo"
          src={NetflixLogo}
        />
        {user && (
          <div className="flex p-2">
            <img
              className="m-4 w-8 h-8"
              alt="user-icon"
              src={DEFAULT_USER_AVATAR}
            />
            <button
              className="font-bold text-white"
              onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
