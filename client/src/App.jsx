import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/FallBack/Loading";

// LAZY IMPORTS (everything loads ONLY when needed)
const Home = lazy(() => import("./pages/Home"));
const Nav = lazy(() => import("./components/Nav"));
const Footer = lazy(() => import("./components/Footer"));
const About = lazy(() => import("./pages/About"));
const Cars = lazy(() => import("./pages/Cars"));
const Car = lazy(() => import("./pages/Car"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const ServicePage = lazy(() => import("./pages/ServicePage"));

const App = () => {

    return (
        <>
        <Suspense fallback={<Loading />}>
            <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cars" element={<Cars />} />
                    <Route path="/car" element={<Car />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/service" element={<ServicePage />} />
                </Routes>
            <Footer />
        </Suspense>
        </>
    );

  


}

export default App
