import React from "react";
import { Provider } from "react-redux";
import { DogBreedList } from "./components";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2 className="text-center text-primary pb-2 pt-4 px-4">
          Danh sách giống chó
        </h2>
        <DogBreedList />
      </div>
    </Provider>
  );
}

export default App;
