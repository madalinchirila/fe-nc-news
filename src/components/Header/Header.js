import React from "react";

const Header = () => {
  return (
    <div>
      <header className="Header">
        <a href="https://get-nc-news.netlify.com/">
          <img
            href="https://get-nc-news.netlify.com/"
            src="https://media.licdn.com/dms/image/C560BAQFpHyXYcc3i7Q/company-logo_400_400/0?e=1573084800&v=beta&t=KMzBaPXXqK9lCp7WJU9xIW8z3SN5qLoPzFYcl7H7_Hc"
            alt="Smiley Face"
            height="100"
            width="100"
            align-text="left"
          />
        </a>
        <div className="MenuBotton">
          <button className="MultipleButtons">Hello, jessjelly!</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
