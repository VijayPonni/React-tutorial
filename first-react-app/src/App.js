import "./App.css";
import "./appStyles.css";
import LifeCycleA from "./components/LifeCycleA";

function App() {
  return (
    <div className="App">
      {
        <div>
          <LifeCycleA />
          {/* <FormComponent /> */}
          {/* <h1 className="normal"> I am normal </h1> */}
          {/* <h1 className={styles.new}>I am CSS module style</h1> */}
          {/* <Inline /> */}
          {/* <StyleSheetComponent isPrimary={false} /> */}
          {/* <NameList /> */}
          {/* <UserGreeting /> */}
          {/* <ParentComponent /> */}
          {/* <EventBind /> */}
          {/* <FunctionClick /> */}
          {/* <ClassClick /> */}
        </div>
      }
    </div>
  );
}

export default App;
