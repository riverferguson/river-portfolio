import ReactDOM from 'react-dom'
import './App.css';
import { Header } from './components/Header';

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
