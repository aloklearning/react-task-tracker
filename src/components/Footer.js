import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation()
    
    return(
        <>
            {location.pathname === '/' && (
                <footer>
                    <p>Copyright &copy; 2023</p>
                </footer>
            )}
        </>
    )
}

export default Footer;