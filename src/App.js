import './App.css';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'



function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={'Welcome'}/>
      <Counter />
    </>
  );
}

export default App;
