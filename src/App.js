// DEPENDENCIES

// STYLE
// import './App.css';

// PAGES/COMPONENTS
import Main from "./pages/Main"

import Footer from "./components/Footer"
import Header from "./components/Header"

// HOOKS
import SarcasticaseHooks from "./hooks/SarcasticaseHooks"

function App() {
  
  const {sarcasticase, text, handleChange} = SarcasticaseHooks()

  return (
    <div className="App">
      <Header />
      <Main 
        sarcasticase={sarcasticase}
        text={text}
        handleChange={handleChange}
      />
      <Footer />
    </div>
  );
}

export default App;
