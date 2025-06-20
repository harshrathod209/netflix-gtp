import React from "react";
import NetflixLogo from "../utils/assets/svg/netflix-logo.svg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
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
              src="https://occ-0-8407-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
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
