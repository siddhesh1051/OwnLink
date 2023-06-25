import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store/store";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Analytics } from '@vercel/analytics/react';






const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  // <React.StrictMode>
  <Provider store={store}>
      <SkeletonTheme baseColor="#5C5C61" highlightColor="#BEBEBE">
        
      <Router>

        <App />
        <Analytics/>

      </Router>
      </SkeletonTheme>
    </Provider>


  // </React.StrictMode>
);
