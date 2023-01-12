import React from 'react';

const style = {
    container: `bg-white flex justify-center items-center max-w-3xl mx-auto px-4`,
    me: `text-sm`,
}

const Footer = () => {
  return (
    <div className={style.container}>
        <div className={style.me}>
            &#169; 2023 Kane Lariviere.
        </div>
    </div>
  )
}

export default Footer;