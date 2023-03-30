import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Timeline from './components/Timeline';


function App() {
  return (
    <div className="App">
      <Navbar href="#navbar"></Navbar>
      <Main></Main>
      <Timeline href="#timeline"></Timeline>
      <Footer></Footer>
    </div>
  );
}

export default App;
