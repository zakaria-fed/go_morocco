import { Container } from "react-bootstrap"
import LittleNavBar from "./components/LittleNavBar/LittleNavBar"
import NavBar from "./components/NavBar/NavBar"

import "./App.css"

const App = () => {
    return (
        <div className="app">
            {/* Header -- Navbar */}
            <div className="header__wrapper">
                <LittleNavBar />
                <NavBar />
            </div>

            {/* Content of Main */}
            <Container className="main">

            </Container>
        </div>
    )
}

export default App
