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
  
  const {sarcasticase} = SarcasticaseHooks()

  return (
    <div className="App">
      <Header />
      <Main 
        sarcasticase={sarcasticase}
      />
      <Footer />
    </div>
  );
}

export default App;
