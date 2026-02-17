import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css'; // Standard React CSS file
import About from './components/About';

function App() {
  return (
    <div className="App">
      {/* Step 2: Navigation Bar */}
      <Navbar />

      {/* Step 3: Hero Section (Introduction) */}
      <Hero />
      <About />
      
      {/* The <h1>Shivam</h1> was a placeholder. 
        The Hero component now handles your name and intro!
      */}
    </div>
  );
}

export default App;