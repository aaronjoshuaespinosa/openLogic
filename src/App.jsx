import { About, Hero, Partners, Services } from "./views"
import './index.css'
import { Footer } from "./components"

function App() {

  return (
    <>
      <main className="font-poppins text-wht bg-gry">
        <Hero />
        <About />
        <Services />
        <Partners />
        <Footer />
      </main>
    </>
  )
}

export default App
