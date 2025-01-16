import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components"
const App = () => {
 

  return (
    <BrowserRouter>

    <div>
      <div >
        <Navbar />
        <Hero/>
       
      </div>
      <section id="about">
      <About />
      </section>
      
      <hr/>
      <Experience />
      <Tech/>
      
     <section id="work">
      <Works/>
      </section>

      <Feedbacks/>
      <div >

        <section id="contact">
        <Contact/>
        </section>
        <StarsCanvas/>

      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
