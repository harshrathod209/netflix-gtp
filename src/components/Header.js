import React from 'react'
import NetflixLogo from "../utils/assets/svg/netflix-logo.svg";

const Header = () => {
    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
            <div className='m-6'>
                <img className="w-28" alt="netflix-logo" src={NetflixLogo} />
            </div>
        </div>
    )
}

export default Header