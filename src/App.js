import ReactDOM from 'react-dom'
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <body className='body'>
        <About />
        <Projects />
        <Experience />
        <Contact />
      </body>
    </div>
  );
}

export default App;
