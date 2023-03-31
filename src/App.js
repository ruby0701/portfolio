import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Timeline from './components/Timeline';



function App() {
  return (
    <div className="App bg-body">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Main></Main>
      </div>
      <div>
        <Timeline></Timeline>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
