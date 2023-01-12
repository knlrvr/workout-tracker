import React from 'react';
import { BsGithub } from 'react-icons/bs';

const style = {
    container: `bg-white flex justify-between font-mono max-w-3xl mx-auto px-4 mt-3`,
    me: ``,
    icon: ` py-1`,
}

const Header = () => {
  return (
    <div className={style.container}>
        <div className={style.me}>
            / k n l r v r
        </div>
        <div className={style.icon}>
            <a href="https://github.com/knlrvr/">
                <BsGithub />
            </a>
        </div>
    </div>
  );
}

export default Header;