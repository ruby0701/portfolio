import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Timeline from './components/Timeline';



function App() {
  return (
    <div className="App bg-body">
      <Navbar></Navbar>
      <Main></Main>
      <Timeline></Timeline>
      <Footer></Footer>
    </div>
  );
}

export default App;
