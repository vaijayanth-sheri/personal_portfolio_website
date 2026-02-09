import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Capabilities from './pages/Capabilities';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Lab from './pages/Lab';
import About from './pages/About';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'projects/:id', element: <ProjectDetail /> },
      { path: 'capabilities', element: <Capabilities /> },
      { path: 'lab', element: <Lab /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

export default router;