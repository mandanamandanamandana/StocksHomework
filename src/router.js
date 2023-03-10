import {
    createBrowserRouter, 
    createRoutesFromElements,
    Route
} from 'react-router-dom';
import App from './App';
import Main from './pages/main';
import Currencies from './pages/currencies';
import Price from './pages/price';

const router = createBrowserRouter(
    createRoutesFromElements( //accepts arguments from elements
        <Route
        path="/" 
        element={<App/>}
        >  
            <Route
            path=''
            element={<Main/>}
            />

            <Route
            path=''
            element={<Main/>}
            />

            <Route
            path='currencies'
            element={<Currencies/>}
            />
            
            <Route
            path='price/:symbol'
            element={<Price/>}
            />

    
    </Route>
    )
);


export default router;


//outlet render parent route element to child route elements
