import store from "./store/store";
import { Provider } from "react-redux";
import Routing from './routing'
function App() {
  return (
    <Provider store={store}>
     <Routing />
    </Provider>
  );
}
export default App;