import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { Provider } from "react-redux";
import VideosDetailPage from "./components/VideosDetailPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Head />
        <div>
          <Routes>
            <Route exact path="/" element={<Body />} />
            <Route exact path="/:id" element={<VideosDetailPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

/********
 * header
 * body:-
 *   -sideBar
 *   -MainContainer:-
 *       -TrendingTags
 *       -cards
 *
 */
