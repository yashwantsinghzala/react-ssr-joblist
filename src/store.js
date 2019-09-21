import { createStore } from "redux";
import reducer from "./store/reducer";

const configureStore = () => {
  return createStore(reducer);
};

export default configureStore;
