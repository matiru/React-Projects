import logo from "./logo.svg";
import "./App.css";
import Accordian from "./components/accordian";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data.js";
import TabTest from "./components/custom-tabs/tab-test.jsx";
import ModalTest from "./components/custom-modal-popup/modal-test.jsx";
import GithubProfileFinder from "./components/github-profile-finder/index.jsx";
import SearchAutocomplete from "./components/search-autocomplete/index.jsx";
import TicTacToe from "./components/tic-tac-toe/index.jsx";
import FeatureFlagGlobalState from "./components/feature-flag/context/index.jsx";
import FeatureFlags from "./components/feature-flag/index.jsx";
import FetchHookTest from "./components/use-fetch/test.jsx";

function App() {
  console.log(menus);
  console.log(TreeView);
  return (
    <div className="App">
      {/* Accordian Component */}
      {/*<TreeView menus = {menus}/> */}
      {/* <TabTest/> */}
      {/* <ModalTest/> */}
      {/* <GithubProfileFinder/> */}
      {/* <SearchAutocomplete/> */}
      {/* <TicTacToe/> */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}
      
      
      <FetchHookTest/>
      

    </div>
  );
}

export default App;
