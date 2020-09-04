import useLightMode from '../hooks/lightMode'

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkmode(false);
    const toggleMode = e => {
      e.preventDefault();
      document.body.classList.toggle("dark-mode")
      setDarkMode(!darkMode);
    };
    return (
      <nav className="navbar">
        <h1>Crypto Tracker</h1>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </nav>
    );
  };
  
  export default Navbar;