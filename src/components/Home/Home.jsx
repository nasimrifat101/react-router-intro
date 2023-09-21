/* eslint-disable no-undef */
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
    const navigation = useNavigation();
   
    return (
        <div>
            <h2 className='text-4xl font-semibold m-5'>Welcome to Homepage</h2>
            <Header></Header>
            {
                navigation.state === "loading" ? <p>loading....</p> :   <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;