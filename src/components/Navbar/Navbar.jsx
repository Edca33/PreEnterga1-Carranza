import './navBarStyled.css';
import CarWidget from '../CartWidget/CarWidget';

function Navbar() {
  const handleClick = (event) => {
    console.log(event);
  };

  return (
    <div className="navBar">
      <h1>HorrorHeaven.Com</h1>
      <h2>Welcome</h2>
      <button>Cosplays</button>
      <button>Masks</button>
      <button>Accessories</button>
      <CarWidget number={369} handleClick={handleClick} />
    </div>
  );
}

export default Navbar;
