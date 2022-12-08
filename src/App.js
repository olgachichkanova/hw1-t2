import ShopItemClass from "./components/ShopItemClass"
import './App.css';
const data = require('./data/data')
function App() {
  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemClass item={data.item} />
    </div>
  </div>
  );
}

export default App;
