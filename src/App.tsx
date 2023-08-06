import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { RouterWrapper } from "./RouterWrapper";
import { RecoilRoot } from "recoil";
import "./App.css";
const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <Header />
        <RouterWrapper />
      </Router>
    </RecoilRoot>
  );
};

export default App;
