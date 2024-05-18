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
      <About />
      
      <hr/>
      <Experience />
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div >
        <Contact/>
        <StarsCanvas/>

      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
