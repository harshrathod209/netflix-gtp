import React, { useEffect } from "react";
import NetflixLogo from "../utils/assets/svg/netflix-logo.svg";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  APP_ROUTES,
  DEFAULT_USER_AVATAR,
  SUPPORTED_LANGUAGES,
} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
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
            {showGptSearch && (
              <select
                className="p-2 m-2 bg-gray-900 text-white"
                onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option
                    key={lang.identifier}
                    value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={handleGptSearchClick}
              className="py-2 px-4 mx-2 my-2 bg-purple-800 text-white rounded-lg">
              {showGptSearch ? "Homepage" : "GPT Search"}
            </button>
            <img
              className="m-4 w-8 h-8 rounded-sm"
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
