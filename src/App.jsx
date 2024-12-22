import React, { Suspense } from "react";
import Loader from "./components/Loader";

const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Features = React.lazy(() => import("./components/Features"));
const Footer = React.lazy(() => import("./components/Footer"));
const Hero = React.lazy(() => import("./components/Hero"));
const NavBar = React.lazy(() => import("./components/NavBar"));
const Story = React.lazy(() => import("./components/Story"));

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Suspense fallback={<Loader />}>
        <NavBar />
        <Hero />
        <About />
        <Features />
        <Story />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;
