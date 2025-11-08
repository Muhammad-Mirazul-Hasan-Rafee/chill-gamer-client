import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

const Root = () => {
    return (
        <div className='bg-[rgb(5,8,22)]'>
            <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            
        </div>
    );
};

export default Root;