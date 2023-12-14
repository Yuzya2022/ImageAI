
import './App.css';
import { ImageGenerator } from './Components/ImageGenerator/ImageGenerator';
require('dotenv').config({ path: '.env.local' });

function App() {
  return (
    <div>
      <ImageGenerator/>
    </div>
  );
}

export default App;
