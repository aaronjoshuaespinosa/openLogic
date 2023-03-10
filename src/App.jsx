import { About, Hero, Partners, Services } from "./views"
import './index.css'

function App() {

  return (
    <>
      <main className="font-poppins text-wht bg-gry">
        <Hero />
        <About />
        <Partners />
        <Services />
      </main>
    </>
  )
}

export default App
