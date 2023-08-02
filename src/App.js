import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <body className='body'>
        <About />
        <Projects />
        <Technologies />
        <Contact />
      </body>
    </div>
  );
}

export default App;
