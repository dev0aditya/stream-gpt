import React from "react";

function Header() {
  return (
    <>
      <span className="absolute inline-block w-full px-36 py-9 bg-gradient-to-b from-black">
        <svg
          fill="#E50914"
          viewBox="0 0 1000 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
        >
          <g>
            <path d="M1,27 L1,3 L10,3 L10,14 L22,14 L22,3 L31,3 L31,27 L22,27 L22,16 L10,16 L10,27 L1,27 Z M35,27 L35,3 L44,3 L44,27 L35,27 Z M52,27 L52,3 L65,3 L65,8 L57,8 L57,13 L64,13 L64,27 L52,27 Z M75,27 L75,3 L87,3 L87,8 L80,8 L80,27 L75,27 Z M95,27 L95,3 L108,3 L108,27 L95,27 Z M118,27 L118,3 L129,3 L129,27 L118,27 Z" />
          </g>
        </svg>
      </span>
    </>
  );
}

export default Header;
