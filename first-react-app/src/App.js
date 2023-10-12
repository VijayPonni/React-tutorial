import "./App.css";
import "./appStyles.css";
import FocusInput from "./components/FocusInput";
import ForwardRefParent from "./components/ForwardRefParent";

function App() {
  return (
    <div className="App">
      {
        <ForwardRefParent />
        // <FocusInput />
        // <CallbackRefsDemo />
        // <ParentComp />
        // <FragmentDemo />
        // <Table />
      }
    </div>
  );
}

export default App;
