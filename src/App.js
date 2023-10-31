import './App.scss';
import { MainHomePage } from './components/mainHomePage/MainHomePage';
import { Header } from './components/header/Header';



function App() {
  return (
    <div className="App">
      <Header />
      <MainHomePage />
    </div>
  );
}

export default App;
