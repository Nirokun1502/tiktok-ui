import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './Layout';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div >
        <Routes>
          {publicRoutes.map((route,index) => {
        
            const Page = route.component;

            let Layout = DefaultLayout;

           Layout = route.layout ? route.layout : route.layout===null? Fragment : DefaultLayout; 

            return <Route key={index} path={route.path} 
            element={<Layout> <Page/> </Layout> } />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
