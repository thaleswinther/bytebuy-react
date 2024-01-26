import "./App.css";

import RotaPrincipal from "./routes/app.routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./redux/store.js";

let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RotaPrincipal />
      </PersistGate>
    </Provider>
  );
}

export default App;
