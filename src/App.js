import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import Footer from './components/Footer/Footer';
import HeaderMain from './components/HeaderMain/HeaderMain';


function App() {
  return (
    <div >
        <Header />
        <HeaderMain />
        <Players />
        <Footer />
    </div>
  );
}

export default App;
