import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ArticlePage from "../pages/Article";
import DetailArticle from "../pages/DetailArticle";


const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticlePage />} />
        <Route path="/article/:id" element={<DetailArticle />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
