import "../App.css";
import logo from "../images/logo.png";

function Loader() {
  return (
    <div className="loader-container">
      <img className="logo" src={logo} alt="Logo" />
    </div>
  );
}

export default Loader;
