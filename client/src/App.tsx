import "./App.css"
import { Container } from "react-bootstrap"

// Components
import LittleNavBar from "./components/LittleNavBar/LittleNavBar"
import NavBar from "./components/NavBar/NavBar"
import FirstSection from "./components/FirstSection/FirstSection"
import SecondSection from "./components/SecondSection/SecondSection"
import Footer from "./components/Footer/Footer"

const App = () => {
    return (
        <div className="app">
            {/* Header -- Navbar */}
            <div className="header__wrapper">
                <LittleNavBar />
                <NavBar />
            </div>

            {/* Content of Main */}
            <div className="main">
                <FirstSection />
                <SecondSection />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default App