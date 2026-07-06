import { RouterProvider } from 'react-router-dom';
import router from './router';
import CustomCursor from './components/core/CustomCursor';
import HeroBackground from './components/HeroBackground';
import './App.css';

function App() {
  return (
    <>
      <HeroBackground />
      <CustomCursor />
      <RouterProvider router={router} />
    </>
  );
}

export default App;