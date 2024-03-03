// В вашем файле App.js
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./shared/header";
import logo from "./assets/logo/logo.jpg";
import Home from "./page/Home";
import NowPlaying from "./page/NowPlaying";
import Movie_Info from "./components/MovieDetails";
import SearchResults from "./components/SearchResults"; // Добавляем импорт компонента SearchResults

function App() {
  return (
    <Router>
      <div className="App">
        <Header 
          logo={logo} 
          title="Movie Site" 
          subTitle="The best movie site" 
        />
        <div className="list">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/popular" element={<NowPlaying />} />
            <Route path="/movie/:id" element={<Movie_Info />} />
            <Route path="/search/:query" element={<SearchResults />} /> {/* Используем SearchResults в маршруте */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
