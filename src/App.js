import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
import CreatePoll from "./components/CreatePoll/CreatePoll";
import QuestionDetail from "./components/QuestionDetail/QuestionDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Question />
        </Route>
        <Route exact path="/createpoll">
          <CreatePoll />
        </Route>
        <Route path="/questions/:questionId">
          <QuestionDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
