import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

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