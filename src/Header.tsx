import { Link, useLocation, } from "react-router-dom"
import '../src/styles/header.css';
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const loggaIn = () => {
        navigate("/bookingPage")
    }

    const loggaUt = () => {
        navigate("/landingPage")
    }

    const handleClick = () => {
        if
            (location.pathname === "/landingPage" || location.pathname === "/") {
            loggaIn()
        }
        else
            loggaUt()
    };

    return (
        <>
            <nav className="nav">
                <a href="/landingPage">
                    <div className="nav-logo">
                        <span>Städafint</span>
                    </div>
                </a>
                <ul className="nav-links">
                    <li><Link to="ourServices">Våra tjänster</Link></li>
                    <li><Link to="about">Om oss</Link></li>
                    <li><Link to="contact">Kontakta oss</Link></li>
                </ul>
                <ul className="nav-login">
                    <Button
                        variant="contained"
                        sx={{
                            color: "white",
                            backgroundColor: "#0D3E5E",
                            marginRight: "0.5rem",
                            fontWeight: "700"
                        }}
                        onClick={handleClick}
                    >
                        {location.pathname === "/bookingPage" ? "Logga ut" : "Logga in"}
                    </Button>
                    {(location.pathname === "/landingPage" || location.pathname === "/") && (
                        <Button
                            variant="outlined"
                            sx={{ color: "#0D3E5E", border: "1px solid #0D3E5E", fontWeight: "700" }}
                        >
                            Registrera
                        </Button>
                    )}
                </ul>
                <FontAwesomeIcon className="mobile-menu" icon={faBars} />
            </nav>
        </>
    )
}
