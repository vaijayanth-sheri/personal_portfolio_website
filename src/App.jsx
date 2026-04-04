import { RouterProvider } from 'react-router-dom';
import router from './router';
import CustomCursor from './components/core/CustomCursor';
import './App.css';

function App() {
  return (
    <>
      <CustomCursor />
      <RouterProvider router={router} />
    </>
  );
}

export default App;