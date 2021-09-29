const Nav = () => {
  return (
    <nav className="level">
      <p className="level-item has-text-centered">
        <a href="" className="link">
          Home
        </a>
      </p>
      <p className="level-item has-text-centered">
        <a href="" className="link">
          Projects
        </a>
      </p>
      <p className="level-item has-text-centered">
        <div id="logo">
          Luis
        </div>
      </p>
      <p className="level-item has-text-centered">
        <a href="" className="link">
          Merchandising
        </a>
      </p>
      <p className="level-item has-text-centered">
        <a href="" className="link">
          Contact
        </a>
      </p>

      <style jsx>{`
      #logo {
        font-size: 3em;
      }
      `}</style>
    </nav>
  );
}

export default Nav;