import logo from './logo.svg';
import './App.css';
import Layout from './component/Layout/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact/Contact';
import Notfound from './component/Notfound/Notfound';

function App() {
  const routers = createBrowserRouter([
    {path:'',element:<Layout/>, children:[
      {index:true,element:<Home/> },
      {path:'about',element:<About/> },
      {path:'portfolio',element:<Portfolio/> },
      {path:'contact',element:<Contact/> },
      {path:'*',element:<Notfound/> },
    ]}
  ])
  return (<>
    <RouterProvider router={routers} />
  </>)
}

export default App;
