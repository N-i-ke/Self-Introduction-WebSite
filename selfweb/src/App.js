import './App.css';
import Header from './components/Header';
import Video from "./components/Video";
import HomePage from "./components/HomePage";
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Video/>
      <HomePage/>
      <Footer />
    </div>
  );
}

export default App;
