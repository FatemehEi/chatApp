import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./component/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
