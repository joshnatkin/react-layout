import{Outlet, Link} from "react-router-dom";

const Layout = () =>{
    return (
        <>
            <Header />

            <Link to="/">Home</Link>
            <Link to ="/abou">ABout</Link>

            <Outlet />

            <p>This is my footer</p>
        
        </>
    );
};

export default Layout;