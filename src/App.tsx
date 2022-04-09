import { Home } from './components/home/Home';
import './App.css';
import { CvProvider } from './providers/cvContext';

function App() {
  return (
    <CvProvider>
      <Home />
    </CvProvider>
  );
}

export default App;
