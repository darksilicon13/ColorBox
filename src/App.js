import './App.css';
import { useState } from 'react';
import ColorBox from './ColorBox';
import ColorInput from './ColorInput';

function App() {
  const [color, setColor] = useState('');
  const [hex, setHex] = useState('');
  const [isDarkText, setIsDarkText] = useState(false);

  return (
    <div className="App">
      <ColorBox color={color} hex={hex} isDarkText={isDarkText} />
      <ColorInput
        color={color}
        setColor={setColor}
        hex={hex}
        setHex={setHex}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
