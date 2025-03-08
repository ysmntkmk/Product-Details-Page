
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreFront from './pages/StoreFront';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StoreFront />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;