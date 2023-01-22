
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./screens/landing";
import { Provider as ProductsProvider } from "./context/productsContext";

function App() {

  return (
    <ProductsProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
        </Switch>
      </BrowserRouter>
    </ProductsProvider>

  );
}

export default App;
