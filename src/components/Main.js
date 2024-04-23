import * as React from "react";
import About from "./About";
import Experiences from "./Experiences";
import Projects from './Projects';
import Footer from "./Footer";

export default function Main() {
	return <main className="Main">
                <About />
                <Experiences />
                <Projects />
                <Footer />
            </main>
}