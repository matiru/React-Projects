import logo from './logo.svg';
import './App.css';
import StarRating from './components/star-rating';
import ScrollIndicator from './components/scroll-indicator';

function App() {
  return (
    <div className="App">
    {/* <StarRating/> */}
    <ScrollIndicator url = { 'https://dummyjson.com/products?limit= 100'} />
    </div>
  );
}

export default App;
